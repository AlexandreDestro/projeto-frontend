export async function testLogin(username: string, password: string) {
    if ((username === "admin" || username === "user") && password === "123456") {
      return {
        username,
        email: `sys.${username}@gmail.com`,
        name: username === "admin" ? "José Admin" : "Pedro Jr.",
        id: username === "admin" ? 1 : 2,
      };
    }
  
    throw new Error("Invalid credentials");
}