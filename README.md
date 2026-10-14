# Lab 2 – Version Control (Git & GitHub)
 
This repository documents the Git workflow practiced in Lab 2: creating a project, working with branches, merging, tagging, and cleaning up locally and remotely.

 
---
 
## 1. Create the project and push it to the remote repo
 
```bash
# Clone the (empty) remote repository
git clone git@github.com:shahed137003/Lab-2-VC.git
cd Lab-2-VC
 
# Create index.html, then check the state
git status
 
# Stage and commit
git add .
git commit -m "adding the first step"
 
# Push to the remote main branch
git push
```
 
> `git commit -am` does **not** work on brand-new files because `-a` only stages files Git already tracks. Use `git add .` first.
 
---
 
## 2. Create the `dev` and `test` branches
 
```bash
git branch test        # create the test branch
git branch dev         # create the dev branch
git switch test        # move to test
```
 
> Note: `git branch switch test` and `switch test` were mistakes. The correct command is `git switch <branch>` (or `git checkout <branch>`). In PowerShell, `switch` alone is a keyword, so it must be prefixed with `git`.
 
### On `test`: add a file and push
 
```bash
# Create behaviour.js
git add .
git commit -m "adding the behavoiur file"
git push origin test
```
 
### On `dev`: add a file and push
 
```bash
git switch dev
# Create styling.css
git add .
git commit -m "adding some styling"
git push origin dev
```
 
---
 
## 3. Merge the changes into `main` and push
 
```bash
git switch test
git merge dev          # bring styling.css into test
 
git switch main
git merge test         # fast-forward main (now has behaviour.js + styling.css)
 
git push               # push main to the remote
```
 
---
 
## 4. Remove branches (locally and remotely)
 
```bash
# Delete locally (safe delete – only works if the branch is merged)
git branch -d test
git branch -d dev
 
# Force delete locally (even if not merged)
git branch -D <branch-name>
 
# Delete on the remote
git push origin --delete test
git push origin --delete dev
```
 
---
 
## 5. Switch to another branch without committing your changes
 
Use **`git stash`** to save your uncommitted work temporarily:
 
```bash
git stash              # save changes and clean the working directory
git switch dev         # switch freely to another branch
 
# Later, when you come back:
git stash list         # see saved stashes
git stash pop          # re-apply the latest stash and remove it from the list
git stash apply        # re-apply but keep it in the stash list
git stash drop         # delete the latest stash
```
 
---
 
## 6. Tags
 
### Create an annotated tag `v1.7`
 
```bash
git tag -a v1.7 -m "version 1.7"
```
 
### Push the tag to the remote
 
```bash
git push origin v1.7   # push one tag
git push --tags        # push all tags
```
 
### List tags
 
```bash
git tag                # list local tags
git tag -n             # list tags with their messages
git ls-remote --tags origin   # list tags on the remote
```
 
### Delete a tag
 
```bash
# Locally
git tag -d v1.7
 
# Remotely
git push origin --delete v1.7
# or
git push origin :refs/tags/v1.7
```
 
> Deleting a tag on the remote does **not** remove it locally (and vice versa). Run both commands to remove it everywhere.
 
---
 
## 7. Adding an image to the README
 
Use Markdown image syntax:
 
```markdown
![Alt text](images/git-workflow.png)
```
 
1. Create an `images/` folder in the project.
2. Copy the image into it.
3. `git add .`, `git commit -m "add image to README"`, `git push`.
---
 
## Command summary
 
| Task | Command |
|------|---------|
| Clone repo | `git clone <url>` |
| Create branch | `git branch <name>` |
| Switch branch | `git switch <name>` |
| Merge branch | `git merge <name>` |
| Push branch | `git push origin <name>` |
| Delete branch (local) | `git branch -d <name>` |
| Delete branch (remote) | `git push origin --delete <name>` |
| Stash changes | `git stash` / `git stash pop` |
| Create annotated tag | `git tag -a v1.7 -m "version 1.7"` |
| Push tags | `git push --tags` |
| List tags | `git tag` |
| Delete tag (local) | `git tag -d v1.7` |
| Delete tag (remote) | `git push origin --delete v1.7` |
 
