
Signed commits verify the authenticity of code changes through cryptographic signatures. 

Required steps:
1. Generate GPG key:
```bash
gpg --full-generate-key
```

2. Add to GitHub:
- Copy GPG key: `gpg --armor --export YOUR_KEY_ID`
- Add to GitHub Settings > SSH and GPG keys

3. Configure Git:
```bash
git config --global user.signingkey YOUR_KEY_ID
git config --global commit.gpgsign true
```

4. Sign commits:
```bash
git commit -S -m "message"  # Manual signing
# Or commits auto-sign with previous config
```

Benefits:
- Verifies commit authenticity
- Prevents impersonation
- Adds security audit trail
- Shows verified badge on GitHub

Commits without valid signatures will be rejected if this protection is enabled.
