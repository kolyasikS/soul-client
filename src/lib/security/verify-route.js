import {AuthController} from "@controllers/auth.controller";
const publicRoutes = [
    '/authentication',
    '/favicon.ico']

function isRoutePublic(route) {
    for (let i = 0; i < publicRoutes.length; i++) {
        if (route.includes(publicRoutes[i])) {
            return true;
        }
    }
    return false;
}

export async function verifyRouteSecurity(url) {
    if (isRoutePublic(url)) {
        return true;
    }

    const res = await AuthController.verify();
    return !res.error;
}