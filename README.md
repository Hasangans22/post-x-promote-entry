# post-x-promote-make-your-own-bounty-01

Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X"
bounty ($250, top 50 paid).

The entry is the X post itself, not this repository: one post of our own
on X that quotes make.fun's make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646), with a photo of its
own attached, its text carrying make.fun and the @makefunai tag plus our
make.fun play code. Places go by the post's replies + reposts + quotes,
highest first.

- Post: https://x.com/jeremysdb/status/2125180147636834698
- Account: @jeremysdb (public)
- Play code in the post's text: `makefun-paper-yacht-reef`

## What this repository holds

- `main.ts` (Node 22, standard library only): copies `POST.json` from the
  repository root to `/output/POST.json`, where the gate reads it. That is
  all it does — the house reads the post and its counts from X itself.
- `POST.json`: the post's address on X.
- `LICENSE`: MIT.

## Run it the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json` and prints nothing on success.
