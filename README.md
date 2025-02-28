-- THIS IS SOMETHING ONLY NEEDED TO PUSH TO MAIN -- 

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

 # Table Component Usage Guide

The `Table` component is a reusable table component that can be used to display tabular data. It supports pagination, row click events, and customizable rows per page.

## Props

- `data`: An array of objects representing the table data.
- `onRowClick`: An optional callback function that is called when a row is clicked. It receives the clicked row as an argument.

## Example Usage

Here is an example of how to use the `Table` component:

```tsx
import React from 'react';
import { Table } from './components/table/TableC';

const rows = [
  {
    name: {
      value: "Byron D'Amore",
      subvalue: '1234567890',
    },
    DOB: {
      value: '01/01/2000',
      subvalue: '22 years',
    },
    email: 'damore@gmail.com',
  },
];

const App = () => {
  const handleRowClick = (row) => {
    console.log('Row clicked', row);
  };

  return (
    <div>
      <Table data={rows} onRowClick={handleRowClick} />
    </div>
  );
};

export default App;
```

## Explanation

1. **Import the Table Component**: Import the `Table` component from its file location.
2. **Define the Data**: Create an array of objects representing the rows of the table. Each object should have properties that match the table's columns.
3. **Handle Row Click**: Define a function to handle row click events. This function will receive the clicked row as an argument.
4. **Render the Table**: Use the `Table` component in your JSX, passing the data and the row click handler as props.

This example demonstrates how to set up and use the `Table` component in a React application. Adjust the data structure and props as needed to fit your specific use case.
