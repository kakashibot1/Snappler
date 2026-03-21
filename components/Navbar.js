import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3>Snappler</h3>

      <div>
        <Link href="/">Accueil</Link>{" | "}
        <Link href="/login">Connexion</Link>{" | "}
        <Link href="/register">Inscription</Link>
      </div>
    </div>
  );
    }
