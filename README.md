# The Houseplant Out-of-Office

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/c/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/Krwanz/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/Krwanz/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

An entry for the [make.fun](https://make.fun) bounty
**The Houseplant Out-of-Office** (`u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047`):
write the funniest out-of-office auto-reply a houseplant would send, 120 characters or fewer.

## The line

> Out of office: I'm a fern, unwatered since March. Your email is now compost. I'll reply the day someone waters me.

## How it works

`main.ts` writes that single line to `entry.txt` in the output directory
(`$MAKEFUN_OUTPUT_DIR`, default `/output`). No network, no dependencies,
no randomness — the same line every run, well inside the 120-character gate.

## Run it

```sh
node main.ts
```

Then read `entry.txt` in the output directory.

## License

MIT — see [LICENSE](LICENSE).
