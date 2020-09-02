# Introduction

Repro for

- https://github.com/prisma/prisma2-private/issues/93
- https://github.com/prisma/prisma-client-js/issues/797

# To Reproduce

- Load `schema.sql` into a Postgres database
- Run `yarn; yarn prisma generate`
- Run `node read-nan-prisma-client.js`

  ```
  PrismaClientRustPanicError:
  Invalid `prisma.withNan.findOne()` invocation in
  /Users/divyendusingh/Documents/prisma/triage/prisma-client-js-797/read-nan-prisma-client.js:7:42

  PANIC: f64 is not a Decimal: Error { message: "Invalid decimal: invalid character" }

  This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

  https://github.com/prisma/prisma-client-js/issues/new?body=Hi+Prisma+Team%21+My+Prisma+Client+just+crashed.+This+is+the+report%3A%0A%23%23+Versions%0A%0A%7C+Name+++++%7C+Version++++++++++++%7C%0A%7C----------%7C--------------------%7C%0A%7C+Node+++++%7C+v12.18.2+++++++++++%7C+%0A%7C+OS+++++++%7C+darwin+++++++++++++%7C%0A%7C+Prisma+++%7C+2.6.0-dev.61+++++++%7C%0A%0A%0A%0A%23%23+Logs%0A%60%60%60%0Aprisma-client+%7B%0A++engineConfig%3A+%7B%0A++++cwd%3A+%27%2FUsers%2Fdivyendusingh%2FDocuments%2Fprisma%2Ftriage%2Fprisma-client-js-797%27%2C%0A++++enableDebugLogs%3A+false%2C%0A++++enableEngineDebugMode%3A+undefined%2C%0A++++datamodelPath%3A+%27%2FUsers%2Fdivyendusingh%2FDocuments%2Fprisma%2Ftriage%2Fprisma-client-js-797%2Fnode_modules%2F.prisma%2Fclient%2Fschema.prisma%27%2C%0A++++prismaPath%3A+undefined%2C%0A++++engineEndpoint%3A+undefined%2C%0A++++generator%3A+%7B%0A++++++name%3A+%27client%27%2C%0A++++++provider%3A+%27prisma-client-js%27%2C%0A++++++output%3A+%27%2FUsers%2Fdivyendusingh%2FDocuments%2Fprisma%2Ftriage%2Fprisma-client-js-797%2Fnode_modules%2F%40prisma%2Fclient%27%2C%0A++++++binaryTargets%3A+%5B%5D%2C%0A++++++previewFeatures%3A+%5B%5D%2C%0A++++++config%3A+%7B%7D%0A++++%7D%2C%0A++++showColors%3A+false%2C%0A++++logLevel%3A+undefined%2C%0A++++logQueries%3A+undefined%2C%0A++++flags%3A+%5B%5D%2C%0A++++clientVersion%3A+%272.6.0-dev.61%27%2C%0A++++enableExperimental%3A+%5B%5D%2C%0A++++useUds%3A+undefined%0A++%7D%0A%7D%0AplusX+Execution+permissions+of+%2FUsers%2Fdivyendusingh%2FDocuments%2Fprisma%2Ftriage%2Fprisma-client-js-797%2Fnode_modules%2F.prisma%2Fclient%2Fquery-engine-darwin+are+fine%0AplusX+Execution+permissions+of+%2FUsers%2Fdivyendusingh%2FDocuments%2Fprisma%2Ftriage%2Fprisma-client-js-797%2Fnode_modules%2F.prisma%2Fclient%2Fquery-engine-darwin+are+fine%0A%60%60%60&title=PANIC%3A+f64+is+not+a+Decimal%3A+Error+%7B+message%3A+%22Invalid+decimal%3A+invalid+character%22+%7D&template=bug_report.md

  If you want the Prisma team to look into it, please open the link above 🙏

  at PrismaClientFetcher.request (/Users/divyendusingh/Documents/prisma/triage/prisma-client-js-797/node_modules/@prisma/client/runtime/index.js:1:227975)
  at processTicksAndRejections (internal/process/task_queues.js:97:5)
  ```

- Run `node write-nan-prisma-client.js`

  ```
  PrismaClientKnownRequestError:
  Invalid `prisma.withNan.create()` invocation in
  /Users/divyendusingh/Documents/prisma/triage/prisma-client-js-797/write-nan-prisma-client.js:7:42

  Missing a required value at `Mutation.createOneWithNan.data.WithNanCreateInput.num`
  at PrismaClientFetcher.request (/Users/divyendusingh/Documents/prisma/triage/prisma-client-js-797/node_modules/@prisma/client/runtime/index.js:1:227598)
  at processTicksAndRejections (internal/process/task_queues.js:97:5) {
  code: 'P2012',
  meta: { path: 'Mutation.createOneWithNan.data.WithNanCreateInput.num' }
  }

  ```

- Run `node read-nan-raw.js`

  ```

  PrismaClientRustPanicError:
  Invalid `prisma.queryRaw()` invocation:

  PANIC: f64 is not a Decimal: Error { message: "Invalid decimal: invalid character" }

  This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

  https://github.com/prisma/prisma-client-js/issues/new?body=Hi+Prisma+Team%21+My+Prisma+Client+just+crashed.+This+is+the+report%3A%0A%23%23+Versions%0A%0A%7C+Name+++++%7C+Version++++++++++++%7C%0A%7C----------%7C--------------------%7C%0A%7C+Node+++++%7C+v12.18.2+++++++++++%7C+%0A%7C+OS+++++++%7C+darwin+++++++++++++%7C%0A%7C+Prisma+++%7C+2.6.0-dev.61+++++++%7C%0A%0A%0A%0A%23%23+Logs%0A%60%60%60%0Aprisma-client+%7B%0A++engineConfig%3A+%7B%0A++++cwd%3A+%27%2FUsers%2Fdivyendusingh%2FDocuments%2Fprisma%2Ftriage%2Fprisma-client-js-797%27%2C%0A++++enableDebugLogs%3A+false%2C%0A++++enableEngineDebugMode%3A+undefined%2C%0A++++datamodelPath%3A+%27%2FUsers%2Fdivyendusingh%2FDocuments%2Fprisma%2Ftriage%2Fprisma-client-js-797%2Fnode_modules%2F.prisma%2Fclient%2Fschema.prisma%27%2C%0A++++prismaPath%3A+undefined%2C%0A++++engineEndpoint%3A+undefined%2C%0A++++generator%3A+%7B%0A++++++name%3A+%27client%27%2C%0A++++++provider%3A+%27prisma-client-js%27%2C%0A++++++output%3A+%27%2FUsers%2Fdivyendusingh%2FDocuments%2Fprisma%2Ftriage%2Fprisma-client-js-797%2Fnode_modules%2F%40prisma%2Fclient%27%2C%0A++++++binaryTargets%3A+%5B%5D%2C%0A++++++previewFeatures%3A+%5B%5D%2C%0A++++++config%3A+%7B%7D%0A++++%7D%2C%0A++++showColors%3A+false%2C%0A++++logLevel%3A+undefined%2C%0A++++logQueries%3A+undefined%2C%0A++++flags%3A+%5B%5D%2C%0A++++clientVersion%3A+%272.6.0-dev.61%27%2C%0A++++enableExperimental%3A+%5B%5D%2C%0A++++useUds%3A+undefined%0A++%7D%0A%7D%0AplusX+Execution+permissions+of+%2FUsers%2Fdivyendusingh%2FDocuments%2Fprisma%2Ftriage%2Fprisma-client-js-797%2Fnode_modules%2F.prisma%2Fclient%2Fquery-engine-darwin+are+fine%0Aprisma-client+Prisma+Client+call%3A%0Aprisma-client+prisma.queryRaw%28SELECT+num+from+%22public%22.%22WithNan%22+where+id+%3D2%3B%29%0AplusX+Execution+permissions+of+%2FUsers%2Fdivyendusingh%2FDocuments%2Fprisma%2Ftriage%2Fprisma-client-js-797%2Fnode_modules%2F.prisma%2Fclient%2Fquery-engine-darwin+are+fine%0AplusX+Execution+permissions+of+%2FUsers%2Fdivyendusingh%2FDocuments%2Fprisma%2Ftriage%2Fprisma-client-js-797%2Fnode_modules%2F.prisma%2Fclient%2Fquery-engine-darwin+are+fine%0A%60%60%60&title=PANIC%3A+f64+is+not+a+Decimal%3A+Error+%7B+message%3A+%22Invalid+decimal%3A+invalid+character%22+%7D&template=bug_report.md

  If you want the Prisma team to look into it, please open the link above 🙏

            at PrismaClientFetcher.request (/Users/divyendusingh/Documents/prisma/triage/prisma-client-js-797/node_modules/@prisma/client/runtime/index.js:1:227975)
            at processTicksAndRejections (internal/process/task_queues.js:97:5)

  ```

- Run `node write-nan-raw.js` - This works
- Run `node read-nan-raw-nullify.js` - This works

```
divyendusingh [prisma-client-js-797]$ node read-nan-raw-nullify.js
{
  nanData: [
    { id: 1, nullif: '1' },
    { id: 2, nullif: null },
    { id: 3, nullif: '0.8' },
    { id: 4, nullif: null },
    { id: 5, nullif: null },
    { id: 6, nullif: null },
    { id: 7, nullif: null },
    { id: 8, nullif: null },
    { id: 9, nullif: null },
    { id: 10, nullif: null }
  ]
}
```
