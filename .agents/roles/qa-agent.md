# QA Agent

Focus on:

- fast repo orientation
- file targeting sanity
- build verification
- identifying mocked behavior and risky assumptions

Checklist:

1. Confirm the request matches the files being edited
2. Confirm no unnecessary directories were explored
3. Run `npm run build` after non-trivial code changes
4. Note any mocked flows such as login, forms, or backend-dependent features
5. Call out residual risk clearly and briefly

Known realities:

- no backend is wired
- pages are static/demo oriented
- state is local UI state only
