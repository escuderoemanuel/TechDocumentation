# Some Command

- Watch local and global user.name and user.email: 
  ```powershell
  git config --get --global user.name
  git config --get --global user.email

  git config --get --local user.name
  git config --get --local user.email
  ```

- Watch remote repository config:
  ```powershell
  git remote -v

  origin  https://github.com/account/repo-name.git (fetch)
  origin  https://github.com/account/repo-name.git (push)
  ```

- Set URL repository:
  ```powershell
  git remote set-url origin https://github.com/account/repo-name.git
  ```

- Revert changes to past commit:
  ```powershell
  git checkout main
  git revert 4eee0de36f73cd9690f44bf33cd19d3b1e9e891..HEAD
  ```

- 