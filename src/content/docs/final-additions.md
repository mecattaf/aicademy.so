distinction between documentation and wiki; for the project, it’s about who the audience is: LLM or human?
All managed from a CLAUDE.md file. see references to stripe and hashicorp gh actions how they do it

Another paradigm to consider is on the project mgmt side of things. How do we blend GH issues (not visible from .git) and items like CHANGELOGs

→ Idea/philosophy is to keep extra-code items in github (reliance:
- wiki (we go back & forth from)
- issues / branch / PR
- workflows is the absolute KEY here, core of any automation...

→ Making sure we have a Reproducible process to set up each repo for a CLI command / PR / simple batch script at least...

→ Convergent coding philosophy revolves around Schema-driven configuration, meaning that we keep a single-source of truth and
keep utilities that convert the json files to functional web apps.
(Philosophy: Minimize work that can be part of LLM and rely on as many Mechanical automations as we can.)
