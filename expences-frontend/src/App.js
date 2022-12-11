import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

function App() {

  const expensesItem = [
    {
      id: 1,
      title: 'D-Mart',
      amount: 10000,
      date: new Date(2022, 8, 20)
    },
    {
      id: 2,
      title: 'T-shirt',
      amount: 1000,
      date: new Date(2022, 10, 10)
    },
    {
      id: 3,
      title: 'Movie',
      amount: 500,
      date: new Date(2022, 10, 20)
    }
  ];

  return (
    <div className="App">
      <div className="card">
        <h1>My Expenses</h1>
        <NewExpenses />
        {expensesItem.length && expensesItem.map((exp) => (
          <Expenses key={exp.id} title={exp.title} amount={exp.amount} date={exp.date} />
        ))}
      </div>

    </div>
  );
}

export default App;
