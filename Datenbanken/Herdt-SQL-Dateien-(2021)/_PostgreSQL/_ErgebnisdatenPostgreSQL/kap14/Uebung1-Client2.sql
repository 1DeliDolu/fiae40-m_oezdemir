BEGIN;
SET TRANSACTION READ WRITE;
SELECT * FROM t_lager;

--nach Ausf�hrung der INSERT-Anweisung im anderen Client-Fenster
SELECT * FROM t_lager;

--nach Ausf�hrung der COMMIT-Anweisung im anderen Client-Fenster
SELECT * FROM t_lager;

COMMIT;
SELECT * FROM t_lager;