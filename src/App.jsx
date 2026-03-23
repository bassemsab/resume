import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Globe, 
  UserCheck 
} from 'lucide-react';

export default function App() {
  return (
    <div className="flex justify-center items-center font-sans bg-slate-100 min-h-screen py-8 print:p-0 print:bg-white">
      {/* Conteneur A4 Strict (210mm x 297mm) */}
      <div className="w-[210mm] h-[297mm] bg-white shadow-2xl overflow-hidden flex flex-row print:shadow-none print:m-0">
        
        {/* COLONNE GAUCHE */}
        <div className="w-[30%] bg-slate-800 text-slate-100 p-5 flex flex-col gap-3">
          
          {/* Photo */}
          <div className="w-full mb-1">
            <div className="w-full aspect-square bg-slate-600 overflow-hidden shadow-sm rounded-lg border border-slate-700">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&crop=faces&q=80&w=256&h=256" 
                alt="John DOE" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Contact */}
          <section>
            <h3 className="text-sm font-semibold border-b border-slate-600 pb-1 mb-2 uppercase tracking-wider text-slate-300">
              Contact
            </h3>
            <ul className="space-y-2 text-[11px]">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-slate-400 shrink-0" />
                <a href="mailto:john.doe@example.com" className="hover:text-white transition-colors whitespace-nowrap tracking-tight">john.doe@example.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-slate-400 shrink-0" />
                <span>+33 6 00 00 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-slate-400 shrink-0" />
                <span>Paris, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={14} className="text-slate-400 shrink-0" />
                <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noreferrer" className="hover:text-white transition-colors break-all">@johndoe</a>
              </li>
              <li className="flex items-center gap-2">
                <Github size={14} className="text-slate-400 shrink-0" />
                <a href="https://github.com/johndoe" target="_blank" rel="noreferrer" className="hover:text-white transition-colors break-all">@johndoe</a>
              </li>
            </ul>
          </section>

          {/* Langues */}
          <section>
            <h3 className="text-sm font-semibold border-b border-slate-600 pb-1 mb-2 uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Globe size={16} /> Langues
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between">
                <span className="font-medium text-white">Anglais</span>
                <span className="text-slate-400">Bilingue (C2)</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-white">Français</span>
                <span className="text-slate-400">Intermédiaire (B2)</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-white">Arabe</span>
                <span className="text-slate-400">Maternelle</span>
              </li>
            </ul>
          </section>

          {/* Compétences */}
          <section>
            <h3 className="text-sm font-semibold border-b border-slate-600 pb-1 mb-2 uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Code size={16} /> Informatique
            </h3>
            <div className="space-y-2.5 text-[11px]">
              <div>
                <div className="font-medium text-white">Développement</div>
                <div className="text-slate-400 leading-tight">Golang, Vue.js, React, Svelte, SvelteKit, Android (Kotlin & Java), C/C++, SQL, Dev Assisté par IA (Opencode)</div>
              </div>
              <div>
                <div className="font-medium text-white">Paiements & Fintech</div>
                <div className="text-slate-400 leading-tight">Intégration paiements, ISO8583</div>
              </div>
              <div>
                <div className="font-medium text-white">Cloud</div>
                <div className="text-slate-400 leading-tight">Kubernetes, K3s, Docker, AWS, Alibaba Cloud, Hetzner</div>
              </div>
              <div>
                <div className="font-medium text-white">Gestion de projet</div>
                <div className="text-slate-400 leading-tight">Agile, Scrum, Jira, ClickUp</div>
              </div>
            </div>
          </section>

          {/* Références */}
          <section>
            <h3 className="text-sm font-semibold border-b border-slate-600 pb-1 mb-2 uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <UserCheck size={16} /> Références
            </h3>
            <div className="space-y-3 text-[11px]">
              <div>
                <div className="font-medium text-white">Jane SMITH</div>
                <div className="text-slate-400">Directrice Technique</div>
                <div className="text-slate-400">TechCorp Inc.</div>
                <a href="mailto:jane.smith@example.com" className="text-blue-400 hover:text-blue-300 block break-all mt-0.5">jane.smith@example.com</a>
              </div>
              <div>
                <div className="font-medium text-white">Robert BROWN</div>
                <div className="text-slate-400">Lead Developer</div>
                <div className="text-slate-400">Innovate LLC</div>
                <a href="mailto:robert.b@example.com" className="text-blue-400 hover:text-blue-300 block break-all mt-0.5">robert.b@example.com</a>
              </div>
              <div className="text-[10px] text-slate-400 italic pt-1 border-t border-slate-700">
                * Numéros de téléphone disponibles sur demande
              </div>
            </div>
          </section>

        </div>

        {/* COLONNE DROITE */}
        <div className="w-[70%] bg-white text-slate-800 pt-8 pb-1 px-6 flex flex-col gap-2">
          
          {/* Header */}
          <header>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-0.5 leading-none">
              John DOE
            </h1>
            <h2 className="text-[15px] text-blue-600 font-semibold mt-1">Chef d'équipe en Ingénierie Logicielle / Expert Fintech & IoT</h2>
          </header>

          {/* Profil */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-2">
              <User size={18} className="text-blue-600" /> Profil
            </h3>
            <p className="text-[12px] text-slate-700 leading-snug text-justify">
              Professionnel de la tech avec plus de 6 ans d’expérience dans le secteur fintech et IoT, ayant évolué vers des fonctions de gestion d’équipe et de projet. Souhaitant développer une vision stratégique globale pour projets d’envergure et occuper des fonctions de direction dans un environnement innovant.
            </p>
          </section>

          {/* Diplômes */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-1 mb-1.5 flex items-center gap-2">
              <GraduationCap size={18} className="text-blue-600" /> Formation
            </h3>
            
            <div className="space-y-1.5">
              {/* MBA */}
              <div className="relative pl-5 border-l-2 border-blue-300">
                  <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full -left-[6px] top-1 ring-2 ring-white"></div>
                  <div className="flex justify-between items-baseline mb-0.5 gap-2">
                    <h4 className="text-sm font-bold text-slate-900">Master 2, International MBA</h4>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md whitespace-nowrap w-[130px] text-center shrink-0">Sept 2025 – En cours</span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-700">IAE-Paris-Est École de management — France</div>
              </div>

              {/* B.Eng */}
              <div className="relative pl-5 border-l-2 border-transparent">
                  <div className="absolute w-2.5 h-2.5 bg-slate-400 rounded-full -left-[6px] top-1 ring-2 ring-white"></div>
                  <div className="flex justify-between items-baseline mb-0.5 gap-2">
                    <h4 className="text-sm font-bold text-slate-900">B.Eng (Hons) - Ingénierie Électronique</h4>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md whitespace-nowrap w-[130px] text-center shrink-0">Oct 2013 – Nov 2017</span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-700">Multimedia University — Malaisie</div>
              </div>
            </div>
          </section>

          {/* Expériences */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-1 mb-2 flex items-center gap-2">
              <Briefcase size={18} className="text-blue-600" /> Expériences professionnelles
            </h3>
            
            <div className="space-y-1.5">
              {/* Job 1 */}
              <div className="relative pl-5 border-l-2 border-blue-300">
                <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full -left-[6px] top-1 ring-2 ring-white"></div>
                <div className="flex justify-between items-baseline mb-0.5 gap-2">
                  <h4 className="text-sm font-bold text-slate-900">Team Lead Software Engineering</h4>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md whitespace-nowrap w-[130px] text-center shrink-0">Mars 2022 – Oct 2024</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-700 mb-1">APAC Venture Sdn. Bhd. — Malaisie</div>
                <ul className="text-[9.5px] text-slate-600 leading-snug text-justify list-disc pl-3.5 space-y-0.5">
                  <li><span className="font-semibold text-slate-700">Caisse (POS) & TopUp Bar :</span> Lancement d'un système de caisse multi-plateforme (Retail/F&B) incluant le recrutement de l'équipe. Gestion du dev. de l'activité recharges mobiles.</li>
                  <li><span className="font-semibold text-slate-700">Plateforme WeTix :</span> Conception de produits (voyages, bons) et agrégateur pour cinémas (TGV, GSC). Supervision des tests UAT/SIT, pentesting (Grey-box) et certification de sécurité.</li>
                  <li><span className="font-semibold text-slate-700">Cloud & Sécurité EMV :</span> DevOps via Kubernetes. Création d'une app d'injection TMK vers la mémoire sécurisée des terminaux et chiffrement ISO8583.</li>
                  <li><span className="font-semibold text-slate-700">Stratégie & Partenaires :</span> Référent technique "Boost Makan". Participation aux décisions de direction pour assurer la scalabilité et l'efficience.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="relative pl-5 border-l-2 border-slate-200">
                <div className="absolute w-2.5 h-2.5 bg-slate-400 rounded-full -left-[6px] top-1 ring-2 ring-white"></div>
                <div className="flex justify-between items-baseline mb-0.5 gap-2">
                  <h4 className="text-sm font-bold text-slate-900">Senior Software Engineer</h4>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md whitespace-nowrap w-[130px] text-center shrink-0">Avr 2021 – Fév 2022</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-700 mb-1">APAC Venture Sdn. Bhd. — Malaisie</div>
                <ul className="text-[9.5px] text-slate-600 leading-snug text-justify list-disc pl-3.5 space-y-0.5">
                  <li><span className="font-semibold text-slate-700">Cloud & DevOps :</span> Services sur Alibaba Cloud (Apsara, Kubernetes). Mise en place CI/CD pour un déploiement et contrôle du code optimisés.</li>
                  <li><span className="font-semibold text-slate-700">Paiements & EMV :</span> Dev. NFC/Bande magnétique sur terminaux de paiement SUNMI/Nexgo (Genting e-Wallet). Intégration Visa/MasterCard via socket TCP/IP et ISO8583.</li>
                  <li><span className="font-semibold text-slate-700">Backend & API :</span> Conception d'endpoints (commandes, recherche géospatiale) sur MongoDB. Intégration partenaires logistiques (Lalamove, Grab Express, pandaGo, 5sends).</li>
                  <li><span className="font-semibold text-slate-700">Frontend & Mini-Apps :</span> UX/UI pour la gestion d'inventaire avec Vue.js 3, Tailwind, Pinia. Déploiement de mini-programmes (Alipay, Boost Makan, S-food). Amélioration continue en Agile (ClickUp).</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="relative pl-5 border-l-2 border-slate-200">
                <div className="absolute w-2.5 h-2.5 bg-slate-400 rounded-full -left-[6px] top-1 ring-2 ring-white"></div>
                <div className="flex justify-between items-baseline mb-0.5 gap-2">
                  <h4 className="text-sm font-bold text-slate-900">Associate Full-Stack Developer</h4>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md whitespace-nowrap w-[130px] text-center shrink-0">Nov 2019 – Avr 2021</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-700 mb-1">APAC Venture Sdn. Bhd. — Malaisie</div>
                <ul className="text-[9.5px] text-slate-600 leading-snug text-justify list-disc pl-3.5 space-y-0.5">
                  <li><span className="font-semibold text-slate-700">Développement Terminaux :</span> Création d'apps multi-plateformes (SUNMI, Nexgo, NewPos, CTMPay) sécurisées (Android/Linux) pour cartes et e-wallets. Intégration push temps réel, fidélité et déploiement de kiosques (parkings).</li>
                  <li><span className="font-semibold text-slate-700">Développement Backend API :</span> Création d'APIs en Golang avec MongoDB pour alacarte.my. Intégration d'OSRM (open source routing) pour le calcul précis des distances de livraison.</li>
                  <li><span className="font-semibold text-slate-700">Développement Frontend :</span> Utilisation de technologies JavaScript avancées (React, Vue.js) pour concevoir des interfaces web et mobiles responsives pour le e-commerce, avec gestion d'état (mobx-state-tree, vuex) basée sur le pattern MVC.</li>
                  <li><span className="font-semibold text-slate-700">Agile & CI/CD :</span> Gestion du code source via Bitbucket et suivi des tickets sur Jira. Utilisation de CircleCI pour la construction et le déploiement continu d'applications sans interruption de service.</li>
                </ul>
              </div>

              {/* Job 4 */}
              <div className="relative pl-5 border-l-2 border-transparent">
                <div className="absolute w-2.5 h-2.5 bg-slate-400 rounded-full -left-[6px] top-1 ring-2 ring-white"></div>
                <div className="flex justify-between items-baseline mb-0.5 gap-2">
                  <h4 className="text-sm font-bold text-slate-900">Network Engineer</h4>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md whitespace-nowrap w-[130px] text-center shrink-0">Jan 2018 – Fév 2019</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-700 mb-1">eBahn Technology Sdn. Bhd. — Malaisie</div>
                <ul className="text-[9.5px] text-slate-600 leading-snug text-justify list-disc pl-3.5 space-y-0.5">
                  <li><span className="font-semibold text-slate-700">Réseau Gigabit & WiFi :</span> Chef d'équipe L3 (hôtels 5 étoiles, 1400+ points d'accès). Conception réseau filaire/sans fil (extension Shangri-La KL, 24 AP). Config. Switch Layer 3, VLAN, OSPF, LACP, Smart Mesh.</li>
                  <li><span className="font-semibold text-slate-700">Architecture Routeur :</span> R&D routeur Gigabit ALPS Gateway V3.0 (WAN Bonding, Firewall L7, Virtualisation KVM). Débit 1Gbps avec un CPU à moins de 10%. Maintenance avec ANTlabs.</li>
                  <li><span className="font-semibold text-slate-700">Expertise Matérielle :</span> Maîtrise des équipements Cisco, HP Procurve, Huawei, ZyXEL, et des contrôleurs / points d'accès sans fil Ruckus/Aruba (Ekahau Site Survey).</li>
                  <li><span className="font-semibold text-slate-700">IPTV & VoIP :</span> Design IPTV (Multicast, IGMP), compression HD et serveurs Linux. Maintenance des systèmes CCTV PoE et téléphonie IPPBX.</li>
                </ul>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
} 
