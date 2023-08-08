--
-- create table logs for testing
--
CREATE TABLE logs (
    id serial NOT NULL PRIMARY KEY,
    entry TEXT NOT NULL
);

--
-- insert sample data of 3 records 
--
INSERT INTO logs (entry)
VALUES
  ('2015-07-29 17:41:44,747 - INFO  [QuorumPeer[myid=1]/0:0:0:0:0:0:0:0:2181:FastLeaderElection@774] - Notification time out: 3200'),
  ('2015-07-29 19:04:12,394 - INFO  [/10.10.34.11:3888:QuorumCnxManager$Listener@493] - Received connection request /10.10.34.11:45307'),
  ('2015-07-29 19:04:29,071 - WARN  [SendWorker:188978561024:QuorumCnxManager$SendWorker@688] - Send worker leaving thread');
