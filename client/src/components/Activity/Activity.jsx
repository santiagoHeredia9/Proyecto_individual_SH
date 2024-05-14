import axios from "axios";
import { Form } from "../components/Form/Form";

export const Activity = () => {
  let flag = false;
  const activities = axios("http://localhost:3001/activities");
  return (
    <>
      <h1></h1>
      {activities ? (
        activities.map((activity) => (
          <div key={activity.id}>
            <p>{activity.name}</p>
            <p>{activity.difficulty}</p>
            <p>{activity.season}</p>
            <p>{activity.countries}</p>
          </div>
        ))
      ) : (
        <div>
          <p>You dont have any activities yet, do you want to create one? </p>
          <button onClick={() => (flag = !flag)}>Here!</button>
          {flag && <Form />}
        </div>
      )}
    </>
  );
};
