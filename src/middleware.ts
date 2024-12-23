import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from './app/lib/session';

// Définition des routes qui nécessitent une authentification
const protectedRoutes = ['/dashboard'];
// Définition des routes accessibles uniquement aux utilisateurs non connectés
const publicRoutes = ['/login'];

export default async function middleware(req: NextRequest) {
    // Récupération du chemin de la requête actuelle
    const path = req.nextUrl.pathname;

    // Vérification si la route actuelle est protégée ou publique
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    // Récupération et décryptage du cookie de session
    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    // Cas 1: Redirection vers /login si l'utilisateur tente d'accéder
    // à une route protégée sans être connecté
    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    // Cas 2: Redirection vers /dashboard si l'utilisateur est déjà connecté
    // et tente d'accéder à une route publique (ex: /login)
    if (isPublicRoute && session?.userId) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
    }

    // Cas 3: Si aucune redirection n'est nécessaire,
    // la requête continue normalement
    return NextResponse.next();
}
