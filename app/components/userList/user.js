import styles from './user.module.css';

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json();
}

export default async function ListOfUsers() {
    const users = await getData();
    return (
    <div className={styles.container}>
        {users.map((user) => {
            return <p>{user.name}</p>;
            })}
      </div>
  )
}
