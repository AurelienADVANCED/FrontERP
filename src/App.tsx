import './App.css';
import OrdersList from './components/OrdersList.tsx'; // Import du composant OrdersList

function App() {
  return (
    <div className="erp-container">
      {/* Barre de navigation supérieure */}
      <header className="erp-header">
        <div className="header-left">
          <img src="/src/assets/logo-clear.png" alt="Logo" className="header-logo" />
          <h1 className="header-title">DUBETON ERP</h1>
        </div>
        <div className="header-right">
          <nav className="top-nav">
            <a href="#profil">Profil</a>
            <a href="#notifications">Notifications</a>
            <a href="#deconnexion">Déconnexion</a>
          </nav>
        </div>
      </header>

      {/* Conteneur principal avec sidebar et contenu */}
      <div className="main-layout">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <a href="#dashboard" className="sidebar-link active">Tableau de bord</a>
            <a href="#clients" className="sidebar-link">Clients</a>
            <a href="#commandes" className="sidebar-link">Commandes</a>
            <a href="#produits" className="sidebar-link">Produits</a>
            <a href="#facturation" className="sidebar-link">Facturation</a>
            <a href="#reporting" className="sidebar-link">Reporting</a>
          </nav>
        </aside>

        <main className="main-content">
          <OrdersList />

          <h2>Ajouter une nouvelle commande</h2>
          <form className="form-create">
            <div className="form-group">
              <label>Nom du client :</label>
              <input type="text" placeholder="Nom du client" />
            </div>
            <div className="form-group">
              <label>Email du client :</label>
              <input type="email" placeholder="exemple@exemple.com" />
            </div>
            <div className="form-group">
              <label>Quantité :</label>
              <input type="number" placeholder="Quantité" />
            </div>
            <button type="submit">Ajouter</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
