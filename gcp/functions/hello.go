package functions

import (
	"fmt"
	"net/http"

	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
)

func init() {
	functions.HTTP("HelloGet", helloGet)
}

func helloGet(w http.ResponseWriter, _ *http.Request) {
	fmt.Fprintln(w, "Hi there!")
}
