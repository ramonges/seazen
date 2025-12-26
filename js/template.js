// Template functions for reusable header and footer
function getHeader() {
    return `
    <header class="header" id="header">
        <div class="container">
            <div class="header-content">
                <a href="index.html" class="logo">
                    <h1>SeaZen</h1>
                </a>
                
                <nav class="nav" id="nav">
                    <ul class="nav-list">
                        <li><a href="index.html" class="nav-link">Accueil</a></li>
                        
                        <li class="nav-dropdown">
                            <a href="#" class="nav-link">À propos <span class="arrow">▼</span></a>
                            <ul class="dropdown-menu">
                                <li><a href="qui-sommes-nous.html">Qui sommes-nous ?</a></li>
                                <li><a href="media.html">TV, radio, presse</a></li>
                                <li><a href="actualite.html">Actualité</a></li>
                                <li><a href="contact.html">Aide & contact</a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-dropdown">
                            <a href="#" class="nav-link">Tours et location <span class="arrow">▼</span></a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-section">
                                    <span class="dropdown-title">Tours privés</span>
                                    <ul>
                                        <li><a href="tours-monaco-nice.html">Entre Monaco et Nice</a></li>
                                        <li><a href="tours-antibes-cannes.html">Entre Antibes et Cannes</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-divider"></li>
                                <li><a href="boat-club.html">Location Boat Club</a></li>
                                <li><a href="dispersion-cendres.html">Dispersion des Cendres</a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-dropdown">
                            <a href="#" class="nav-link">Construction <span class="arrow">▼</span></a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-section">
                                    <span class="dropdown-title">Bateaux solaires</span>
                                    <ul>
                                        <li><a href="bateaux-sre23.html">SEAZEN SRE 23</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-divider"></li>
                                <li class="dropdown-section">
                                    <span class="dropdown-title">Accompagnement</span>
                                    <ul>
                                        <li><a href="accompagnement-utilisation.html">Utilisation</a></li>
                                        <li><a href="accompagnement-partenariat.html">Partenariat</a></li>
                                        <li><a href="accompagnement-retrofit.html">Retrofit</a></li>
                                        <li><a href="accompagnement-strategie.html">Stratégie</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                
                <div class="header-actions">
                    <div class="language-selector">
                        <button class="lang-btn" id="langBtn">
                            <span class="lang-flag">🇫🇷</span>
                            <span class="lang-code">FR</span>
                            <span class="arrow">▼</span>
                        </button>
                        <ul class="lang-dropdown" id="langDropdown">
                            <li><a href="#" data-lang="fr" class="lang-option active">🇫🇷 Français</a></li>
                            <li><a href="#" data-lang="en" class="lang-option">🇬🇧 English</a></li>
                            <li><a href="#" data-lang="es" class="lang-option">🇪🇸 Español</a></li>
                            <li><a href="#" data-lang="it" class="lang-option">🇮🇹 Italiano</a></li>
                        </ul>
                    </div>
                    <button class="mobile-menu-toggle" id="mobileMenuToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
    `;
}

function getFooter() {
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>SeaZen</h3>
                    <p>Bateaux électriques solaires<br>Région PACA, France</p>
                </div>
                <div class="footer-section">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="qui-sommes-nous.html">À propos</a></li>
                        <li><a href="tours-monaco-nice.html">Tours et location</a></li>
                        <li><a href="bateaux-sre23.html">Construction</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="tours-monaco-nice.html">Tours privés</a></li>
                        <li><a href="boat-club.html">Boat Club</a></li>
                        <li><a href="bateaux-sre23.html">Bateaux solaires</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="contact.html">Aide & Contact</a></li>
                        <li><a href="actualite.html">Actualité</a></li>
                        <li><a href="media.html">Presse</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 SeaZen. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
    `;
}

