package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/fxtlabs/primes"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	var count int
	fmt.Fscanln(reader, &count)
	for t := 0; t < count; t++ {
		var n int
		fmt.Fscanln(reader, &n)
		s, _ := reader.ReadString('\n')
		a := readNumbers(s)
		if n%2 == 1 {
			fmt.Println(-1)
			continue
		}
		zeros, ones := 0, 0
		for _, v := range a {
			if v == 1 {
				ones++
			} else {
				zeros++
			}
		}
		if zeros == ones {
			fmt.Println(0)
		} else if ones == 0 {
			fmt.Println(-1)
		} else if zeros > ones {
			fmt.Println(zeros - n/2)
		} else {
			x := ones - n/2
			if x%2 == 0 {
				fmt.Println(x / 2)
			} else {
				fmt.Println((x+1)/2 + 1)
			}
		}
	}
}

func pdsf1() {
	reader := bufio.NewReader(os.Stdin)
	var count int
	fmt.Fscanln(reader, &count)
	for t := 0; t < count; t++ {
		var x, y int
		fmt.Fscanln(reader, &x, &y)
		w := x * y
		if x <= 8 && w <= 500 {
			fmt.Println("YES")
		} else {
			fmt.Println("NO")
		}
	}
}

func minInt(a, b int) int {
	result := a
	if b < a {
		result = b
	}
	return result
}

func abs(a int) int {
	result := a
	if a < 0 {
		result = -a
	}
	return result
}

var MODUS = 1000000007

func modexp(a, b int) int {
	result := 1
	for b > 0 {
		if b%2 == 1 {
			result = (result * a) % MODUS
		}
		b = b >> 1
		a = (a * a) % MODUS
	}
	return result
}

func modadd(a, b int) int {
	return (a + b) % MODUS
}

func modsub(a, b int) int {
	result := a - b
	if result < 0 {
		result = result + MODUS
	}
	return result
}

func modmult(a, b int) int {
	a = a % MODUS
	b = b % MODUS
	result := (a * b) % MODUS
	return result
}

func modinverse(a int) int {
	divisor := a
	quotient := MODUS / a
	reminder := MODUS % a
	s1, s2, t1, t2 := 1, 0, 0, 1
	s3, t3 := s1-quotient*s2, t1-quotient*t2
	for reminder != 0 {
		//fmt.Println(divisor, quotient, reminder, s2, s3, t2, t3)
		quotient, divisor, reminder = divisor/reminder, reminder, divisor%reminder
		s1, s2, s3 = s2, s3, s2-quotient*s3
		t1, t2, t3 = t2, t3, t2-quotient*t3
	}
	// fmt.Println(divisor, quotient, reminder, s2, s3, t2, t3)
	result := t2 % MODUS
	if result < 0 {
		return result + MODUS
	} else {
		return result
	}
}

func readNumbers(s string) []int {
	s = strings.TrimSpace(s)
	strs := strings.Split(s, " ")
	numbers := []int{}
	for _, str := range strs {
		n, _ := strconv.Atoi(str)
		numbers = append(numbers, n)
	}
	return numbers
}

func modfact(a int) int {
	result := 1
	for i := a; i > 1; i-- {
		result = (result * i) % MODUS
	}
	return result
}

func modnck(n, k int) int {
	result := 1
	for i := n; i > n-k; i-- {
		result = (result * i) % MODUS
	}
	result = modmult(result, modinverse(modfact(k)))
	return result
}

var allp, p1 = genPrime1(100000)

func threeFactors(n int) []int {
	factors := []int{}
	for _, p := range allp {
		if p > n {
			break
		}
		if n%p == 0 {
			factors = append(factors, p)
		}
		if len(factors) == 3 {
			break
		}
	}
	if len(factors) == 0 {
		return []int{-1}
	}
	if len(factors) == 1 {
		f := factors[0]
		if n == f {
			return []int{-1}
		} else if f < 100 {
			power5 := f * f * f * f * f
			power6 := power5 * f
			if n < power5 {
				return []int{-1}
			} else if n == power5 {
				return []int{f, f * f, f * f * f}
			} else if n >= power6 {
				factors = []int{f, f * f}
				factors = append(factors, n/(f*f*f))
				return factors
			}
		} else {
			return []int{-1}
		}
	}
	if len(factors) == 2 {
		if n != (factors[0] * factors[1]) {
			factors = append(factors, n/(factors[0]*factors[1]))
		} else {
			return []int{-1}
		}
	}

	factors[2] = n / (factors[0] * factors[1])
	if factors[2] == factors[1] || factors[2] == factors[0] {
		return []int{-1}
	}
	return []int{factors[0], factors[1], factors[2]}
}

func genPrime1(n int) ([]int, time.Duration) {
	t := time.Now()
	a := make([]bool, n+1)
	for i := 2; i <= n; i++ {
		a[i] = true
	}
	for i := 2; i*i <= n; i++ {
		if !a[i] {
			continue
		}
		for j := i * i; j <= n; j += i {
			a[j] = false
		}
	}
	result := []int{}
	for i := 2; i <= n; i++ {
		if a[i] {
			result = append(result, i)
		}
	}
	taken := time.Since(t)

	return result, taken
}

func genPrime2(n int) ([]int, time.Duration) {
	t := time.Now()
	result := primes.Sieve(n)
	taken := time.Since(t)

	return result, taken
}

func gcf(a int, b int) int {
	var divisor, remainder int
	if a < b {
		divisor = a
		remainder = b % a
	} else {
		divisor = b
		remainder = a % b
	}

	for remainder != 0 {
		dividend := divisor
		divisor = remainder
		remainder = dividend % divisor
	}

	return divisor
}

// basic stack
type stack []string

func (s stack) push(v string) stack {
	return append(s, v)
}

func (s stack) pop() (stack, string) {
	len := len(s)
	return s[:len-1], s[len-1]
}

// algo
func rpn(s string) string {
	tokens := stack([]string{})
	for i := 0; i < len(s); i++ {
		token := s[i : i+1]
		// fmt.Println("token: ", token)
		switch token {
		case "(":
			// do nothing
		case ")":
			var lhs, rhs, operator string
			if len(tokens) < 3 {
				return "invalid_expression"
			}
			tokens, rhs = tokens.pop()
			tokens, operator = tokens.pop()
			tokens, lhs = tokens.pop()
			result := lhs + rhs + operator // transformed expression
			// fmt.Println("result being pushed: ", result)
			tokens = tokens.push(result)
		default:
			// push operand and operator on stack
			tokens = tokens.push(token)
			// fmt.Println("token being pushed: ", token)
		}
	}
	if len(tokens) == 1 {
		return tokens[0]
	} else if len(tokens) == 3 {
		// special case a+b without braces
		return tokens[0] + tokens[2] + tokens[1]
	} else {
		return "invalid_expression"
	}
}

func xyz() {
	reader := bufio.NewReader(os.Stdin)
	var count int
	fmt.Fscanln(reader, &count)
	for t := 0; t < count; t++ {
		var n, m, k int
		fmt.Fscanln(reader, &n, &m, &k)
		inv := modinverse(2)
		rm := map[int]int{} // rows multiplication factor map key: row
		cm := map[int]int{} // cols multiplication factor map key: column
		rbase, rdiff := modmult(modmult(m, m+1), inv), modmult(m, m)
		cbase, cdiff := modmult(modmult(n, modadd(2, modmult(n-1, m))), inv), n
		fmt.Println(rbase, rdiff, cbase, cdiff)
		for i := 0; i < k; i++ {
			var q, x, v int
			fmt.Fscanln(reader, &q, &x, &v)
			if q == 0 {
				base := modadd(1, modmult(x-1, m))
				if _, ok := rm[x]; !ok {
					rm[x] = v
				} else {
					rm[x] = modmult(rm[x], v)
				}
				if v == 0 {
					cbase = modsub(cbase, base)
					cdiff = modsub(cdiff, 1)
				} else if v > 1 {
					cbase = modadd(cbase, modmult(v-1, base))
					cdiff = modadd(cdiff, v-1)
				}
				// fmt.Println("cbase: ", cbase, "cdiff: ", cdiff)
			} else {
				base := x
				if _, ok := cm[x]; !ok {
					cm[x] = v
				} else {
					cm[x] = modmult(cm[x], v)
				}
				if v == 0 {
					rbase = modsub(rbase, base)
					rdiff = modsub(rdiff, m)
				} else if v > 1 {
					rbase = modadd(rbase, modmult(v-1, base))
					rdiff = modadd(rdiff, modmult(v-1, m))
				}
				// fmt.Println("rbase: ", rbase, "rdiff: ", rdiff)
			}
		}
		result := modmult(modmult(n, modadd(2*rbase, modmult(n-1, rdiff))), inv)
		for k, v := range rm {
			// compute kth element and substract from result
			item := modadd(rbase, modmult(k-1, rdiff))
			if v == 0 {
				result = modsub(result, item)
			} else if v > 1 {
				result = modadd(result, modmult(v-1, item))
			}
		}
		fmt.Println(result)
	}
}
