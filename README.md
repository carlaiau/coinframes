# Coinframes

Learning in public. My first adventure into Farcaster frame development. Using the https://frog.fm framework.

This is a simple frame that fetches the latest price and market information for a specific cryptocurrency ticker and displays a snapshot directly on the timeline

<img src="https://proxy.wrpcd.net/?url=https%3A%2F%2Fcoinframes.xyz%2Fsnapshot%2FdHliZ18xNzE0MjUwNDAw%2Fimage%3Fimage%3DN4IgLghg5iBcIBMCWA3EAaEAHATgeywGc5RCwBPAGwFMTElCtKJy4QAzGgDww%25252B4BEkOagGMwSPADs2IvJQCuAW2mYAFtSRRVYNgEYADPoCkvAO5IEYVXsMmAvncwjVSSgmHTYAbVCQY8ZDRMXAJiWFIKGjoISk1JADVqHHERGJlqSTAk3gAjCBEAayh8eUkEAGE5PBw2AGJqdnYAJnYAVl4sCARkSX8QAGYAFgA6JoAOVoB2XUHxqZm5rB5grp6oACE8MDA8RTZBgE5h1qb%25252Bsf0Dk7OLk4A2Jd5FCBwoJEkAFQI2fuHzy9O-lc-v0Hpgni83pttrtvr8bgD4dcDiDliActUEElKpRqnVJiJbq0RLpchikgB1CxWNiTYa3XQHfSDSb0xnM1mgtFknAAJS6SHkYRADOGTJZDLFrLFnOQjGYrHgnGoqKVXEEwjEEk8IFkCmUvFVAHF8KY9AapGAAMpIABetHg-X0w3ZEpdbMmg05ACtBeJ2ORKpkMjp4CJg9kHE4XG4PHAfOBoGxAh18EQ6GQqPbQLKmCw2KqDQIhKJxFIZHIlCoQOpNNobMZeFAIFgaXTXeL3RyVRbrXbvk63ZL256eJGddH3Bk475EwFUCnQunIlm%25252BMq2E6mrwc-L89xC8r1SWteW9VX2D3bfaBgOO0P3SOQGPnK5J55434k-PgqmwhFM9FYigSQAEkskUIVVQAWjIZ4dEwbc80VPdMFVQ9NTLeATV4H0yCQf1AyyTJd2VaDIGSfcuHJHBmzYSQ8FMaiW0wJsW3gWkpUHN1OXPTJeyvR1nVvTiPQeJ8J1jbwZz6ZNv0XcIQAzKJ5ILeAnXaNQNC0ENhVsbDfTwgMLWDdIgxqeCGFzBVVxVIsNVLbVdUrc1eMvftBI4oSRNHRxxxfCT31neggmwH8l3-eSEKsgsUNso8MJ1Ct9WYmiHThf4kSBC4UWcq1XIdG8PI8h8xL8qdJITaSvxCuS-yU0AYjiUDqHA4iuFI2DeF1XF4FqXRqCafQmnUjgLz7eBBlaYZplmCZprmaZWhlCydyQtcYoPYt0IcxLpBKmMyq8EAABJ6XQXQxn6dBHX0dBBjGW4QAAXUwBgAFFCFSLBqAQOAwBweRqEcKTP2CkI03kxSVwaoCmpa1a2pg8inCqGoevxQliRyvj9kmubZoWfHFtRSLWootD7JPJy9tfOMQAAWXKABBAAFJ6XsId7Pu%25252B37-sB56QDej7m252A-oBux%25252BcFrmftF3mgYqkGF3B2qVxUkA1N4GstPrExMBwv1DKDIjQ3DMz6DlRDrLJzaKdDHasby693PbIrRJ8599rfYG51B0KIeXOgSfh627OPO3T0bFKBjSzL0uBbjRv4gqXeHN2o1Kr2FZ9pXfwUgP5OhkCwIg7hIIyH7kZxVGQF6-rBuGnjcrGkAJqmgn5hm%25252BYia3ZbLei6zybDhKI%25252Bp-yQEZ3AAAJHXQSf9H6WAmkmNmBY5oWvplsXAfQb2gpzsK6pAQvYZLkjy86lG8QJIkSRQxOcbbzu8a7paLai5CB5tofHP1UeDpAAAqu8coK8pbC03nLSWa9pY83FlAzm4DYF83ZggjeSCJYoPXiLLe8sPzZ1ksrPO4VQBq1vp-UO8Uf5Vn1gZAixkTamR7m-Um60uDGnomaO%25252BLlm4CWEq7by6dPbTiznvAhudIYAUasXVq7Ukbm0siw8hcVtRYT1vpfCRljbWVkXBayVEo50QYjRLhTck7O07KnARvkhHeHgVgiB4sd4iJktVQhEiC6AUkHQrRUFEa6KDlbVhg94qqJADQjRRttK%25252BLIro1U%25252BjWIgCMUxEALFWyFRTgcTknRuhvCgJ8BJZxRRx0RICBO3CzF8MsY%25252Bd24kDq7yQIoGAYj0w4BEGwbQYAiCwAAPTdIgIQQg1AwCEGGLIXJogCh4FGbsbpYzJCEG6Q06A1AFmDF0OMbpzAXjUG6YQOQEBJAQGGFgXoAB%25252BXQtwDiEjFK0B6mBzCWGsLAVogwNK1hDC8zA7jQDgleB8L4sB1l-zfHYmBstHG7xcWDcR%25252BcSH33gLcJ0xTkXdxMeSTSdY2KGF4DQbYSRLSdBELktgkFdDDAsRS6UxNe7vzWkoralNf41IzrTS0%25252BzDmgOgYg8F29d6EBQE01xudzwiEFBAHISkOAxEGbwZ4SAICQRcN0Mq4Bea8BQEgagphNg8FUnPSe50DVjC3BASAkEsi4RluPHAJp%25252BCpn4PRECsgqzfMSVSJ5nzqwYo%25252Ba8kAvy3g8neXAAwYJnh-IADINBDAYYFwi8HYFNdYZpEU2CKEmAawYk9WiQVaFmrNNoDSuEoHUQwEALq0GZTYrwoLuU4JrWgnluDApQr9irOgXVq61FLeWh2zdEXktjoOspYB0VBqxfoHFQysg4AJfkYl8BSXkrvMu5kr8FHByCV-Sh9tY3eHVscCdmATD1uwZAzBYKcFOPjS2mqRDD6N2xvAA4ZKn7t2mtlNF3qaTYswLi6ds6iW9BJWSylwk10rUCfS22w8qaVppnuo6uh%25252Bi3HJQcTlqDT1wPPbWuWV7m1VWhQfVWe5VKjGGgE-uqEt3bQjiYx9TtKn3jTtY%25252BDAVKq%25252B1va64%25252B0j4Y6KYeuyDVGKEqI4Wo3CETCJRNLn4ii8TaL0UYh0VYuSoQ7D2PAXQL75pvoWJk7s5S3KMbFMVOD-lIUEdbXe4ja4NOay-flcxK6vK5HyEUEoZQ6iNC8%25252BwUkOBMS8n5IKPQk0EQotOJMcDfcP5CeUYys88KGOeX4dUwRrHzMcbcbCo%25252BniT4yJk%25252BZZhG6oND1CeEw2km8sxNk4p%25252BAhjFN0cdrwpLVTd1scVsmttykSP7taK0MYSHLhDDGBdSYTQZh2bHYl9JTHUR5EKMUPApQrWxEkNQZ4kFij8mDAACkZJiKAs9ajsAQP0OeRhDvdv6NQA1tgACUvn-N8mQEFjTIWMqhauBF6lhXBOxQZeHJyDWeHJ1A851rJ6HHINXhhyHGDof2PQRD9BeH2P739sQ7LUjmqnwRlVgrAnKN-eg6V9R5X6HaPy3omrIA6vGJGgZhzRnmQmdS2Z5xFnONZbVk6fovO%25252Bf84F-0Cb2sNO6XxxBwnG1hNxd7RU5rM2UssbZ9ejnmWMcdrqH1AaQ1ZcP2fvr3QqL5ES%25252Bi0T7%25252BO7TP-0Q7z34y8keNvt5e9LaPOskO6zzwXnvefC8xTpBs4uot0pi-9mDSV6emMM-L4zzGPZpfZxlmFGPuPY5MtOi%25252BVcr4YzIQ%25252Bx2rcDevqNxR03UvYsA6Zaz-%25252BTRBgAAlJ48kZgAOUNK9dDCOHfYYbU7%25252BPLurN0G58ML3XuffaQMP743gebIl5D1Q3XjOo-M5j7UzOKuE9EckTDHj2jz6V26jXLX9dZ8t1xjpgvkXaWT7VNRmXrXjoDedA9R3Z74cXqf2Azvr%25252BuXv6w8-nD3%25252B3%25252BYah3-1hyAA&s=1579082ec2d9aa801f09149a400a37028ae462d4afd3a75eea9bf46f407d5782" width="400"/>

Intents allow you to change the ticker or refresh the present ticker as illustrated in this post: https://warpcast.com/carlaiau/0xae28a3c6
The site is hosted on Render which gives us a persistant run-time and therefore can use a simple caching layer to prevent bombarding CoinGecko's API


## Instructions for local development

```sh
bun install
bun run dev
```

Head to http://localhost:5173/dev

## .env variables
```
is_cg_pro= # true or false
cg_pro_api_key= # API key for CoinGecko Pro
cg_api_key= # API secret for CoinGecko Demo
```

## To Do
The ability to subscribe to a pricing alert via casting a prompt (and also subscribe via the frame itself). 

`coinframe alert btc @30` - For alerting when asset reaches a specific price

⁠`coinframe alert sol 5` - For alerting when asset decreases/increases a specific amount from time of posting

⁠`coinframe alert eth 5%` - For alerting when asset decreases a specific percentage from time of posting

Then once subscribed a frame is automatically cast to the subscriber when parameters are met.
This functionality will be built using https://neynar.com/ SDK and webhooks system.
