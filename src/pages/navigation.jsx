import { useUser } from "../lib/authContext";
import { Navigate } from "react-router-dom";

export default function Navigation() {
    const { user } = useUser();
  
    return (
      <NavigationContainer linking={LinkingConfiguration}>
        {user ? <AppStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    );
  }