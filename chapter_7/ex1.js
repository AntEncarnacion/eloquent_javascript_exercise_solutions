require("./code/load")(
  "code/chapter/07_robot.js"
);

function compareRobots(robot1, memory1, robot2, memory2) {
  let sum_1 = 0;
  let sum_2 = 0;
  for (let i = 0; i < 100; i++) {
      let temp_state = VillageState.random();
      sum_1 += runRobotv2(temp_state, robot1, memory1);
      sum_2 += runRobotv2(temp_state, robot2, memory2);
  }
  console.log(`Robot 1 Average Steps: ${sum_1 / 100}\nRobot 2 Average Steps: ${sum_2 / 100}`);
}

function runRobotv2(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

compareRobots(routeRobot, [], goalOrientedRobot, []);