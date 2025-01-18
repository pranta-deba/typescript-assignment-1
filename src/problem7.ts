{
  /*
        Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.
    */

  type LogString = (value: string | number) => void;

  const logString: LogString = (value) => {
    const res = typeof value === "string" ? value : "Input is not a string.";
    console.log(res);
  };

  logString("Hello, TypeScript!");
  logString(42);
}
