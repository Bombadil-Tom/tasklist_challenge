## Coding Challenge

The coding challenge revolves around building a task list. Tasks belong to groups and can have
dependencies on one another (i.e. if task X depends on task Y, task X cannot be completed until
task Y is completed). The challenge includes 2 components:

- Build React-based UI
- Design database schema

### Build React-based UI

The UI consists of 2 screens:

- **Overview**: Displays a list of all the groups along with their completion status. Clicking on
  a group should render the detail screen.

- **Detail**: Displays a list of all the tasks in the selected group and allows the user to toggle
  the completion status of unlocked tasks.

The data you should use to populate your implementation is available at _public/data.json_ and can
be loaded from http://localhost:3000/data.json. SVG assets for the icons used in the design
also live in _public/_ and can be loaded similarly.

Some things to keep in mind:

- Locked tasks cannot have their completion status toggled
- Tasks remain locked until all of their dependencies have been completed
- Your implementation should resemble the above design
- **Please don't introduce any new dependencies**, you should have everything you need to complete
  the challenge
- We value well structured code that follows best practices

### Design Database Schema

Design a schema in SQL to store the task list data. You can add the SQL code needed to create
the schema to _schema.sql_. The schema should define all tables, columns, and constraints needed
to store the task list data.
