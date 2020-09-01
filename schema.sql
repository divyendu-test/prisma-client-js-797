CREATE SEQUENCE IF NOT EXISTS "WithNan_id_seq";

CREATE TABLE "public"."WithNan" (
    "id" int4 NOT NULL DEFAULT nextval('"WithNan_id_seq"'::regclass),
    "num" float8 NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."WithNan" ("id", "num") VALUES
('1', '1'),
('2', 'NaN');
