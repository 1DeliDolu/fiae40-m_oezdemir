BEGIN;
SET TRANSACTION READ WRITE;

DELETE FROM t_ma WHERE ort='Berlin';

SELECT * FROM t_ma WHERE ort='Berlin';

ROLLBACK;

SELECT * FROM t_ma WHERE ort='Berlin';