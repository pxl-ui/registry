import z from "zod";

const CommitSchema = z
  .object({
    merge: z.string().nullable(),
    header: z.string().nullable(),
    body: z.string().nullable(),
    footer: z.string().nullable(),

    notes: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
      }),
    ),
    references: z.array(
      z.object({
        issue: z.string(),
        action: z.string().nullable(),
        owner: z.string().nullable(),
        repository: z.string().nullable(),
        prefix: z.string(),
        raw: z.string(),
      }),
    ),
    mentions: z.array(z.string()),

    revert: z
      .object({
        hash: z.string().nullish(),
        header: z.string().nullish(),
      })
      .catchall(z.string().nullish())
      .nullable(),

    type: z.string().nullish(),
    scope: z.string().nullish(),
    subject: z.string().nullish(),
  })
  .describe(
    "Interface from [conventional-commits-parser](https://www.npmjs.com/package/conventional-commits-parser)",
  );

const ConventionalCommitSchemas = {
  Commit: CommitSchema,
};

type Commit = z.infer<typeof CommitSchema>;

declare namespace ConventionalCommit {
  export type { Commit };
}

export type { Commit, ConventionalCommit };
export { CommitSchema, ConventionalCommitSchemas };

export default ConventionalCommitSchemas;
