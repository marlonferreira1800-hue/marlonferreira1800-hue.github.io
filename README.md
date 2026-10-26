# ⚡ Portfólio Marlon Ferreira — Padrão Tamal Sen (tamalsen.dev)

Portfólio moderno de alto impacto inspirado na assinatura visual e arquitetura de layout de [tamalsen.dev](https://tamalsen.dev/), customizado integralmente para os projetos e especialidades de **Marlon Ferreira**.

---

## 🎨 Características Implementadas (Assinatura Tamal Sen)

1. **Aparência Dark-Mode Profissional (IDE & Creative Engineer):**
   - Paleta escura profunda (`#07090e`, `#0d121d`) com iluminação ambiente radial e grade sutil no fundo.
   - Tipografia refinada: **Poppins** para títulos e UI + **Roboto Mono** para códigos e marcadores.
   - Acentos visuais em ciano elétrico (`#00d2ff`), roxo moderno (`#8b5cf6`) e verde esmeralda para status live.

2. **Cursor Interativo Seguidor Duplo (`circle-cursor`):**
   - Anel externo fluido com atraso suave e ponto central milimétrico no cursor.
   - Expansão dinâmica e reação ao pairar em cards e botões.

3. **Menu Flutuante com Glassmorphism (Floating Navbar):**
   - Navbar com efeito de desfoque (`backdrop-filter: blur(16px)`), numeração técnica (`01. Projetos`, etc.), indicador de seção ativa (*ScrollSpy*) e menu retrátil para mobile.

4. **Showcase de Projetos em Destaque (Layout Alternado Marquee):**
   - Destaque hierárquico dos sistemas principais do Marlon Ferreira:
     - 🚀 **Startup Asclépio — Navegador Desktop com IA Nativa** (PySide6 Qt, Playwright, Vision LLMs, Gemini Pro, NVIDIA NIM, releases Windows .exe)
     - ⚕️ **Asclépio — Triagem Médica Multi-Agente & Anamnese Guiada** (FastAPI, Guardrails determinísticos, Live Demo Netlify)
     - 🩺 **MedTutor 3D — Professor Virtual & Educação Médica Imersiva** (Three.js WebGL, sincronia labial fonética, ausculta cardíaca Web Audio)
     - 👁️ **Asclépio Face — Visão Computacional & Biometria Ótica** (OpenCV, 100% local, privacidade estrita de saúde)
     - 📰 **Decifrando Dados — Newsletter & Pipeline de Compilação** (Metodologia em 5 blocos, compiladores PDF/HTML/LinkedIn)

5. **Grid Filtrável de Projetos Complementares:**
   - Filtros por categoria: *Todos*, *IA & Agentes*, *HealthTech & 3D*, *Desktop & Automação*, *Open Source*.
   - Inclui repositórios ativos do GitHub: `agente-asclepio`, `asclepio-skills-and-plugins`, `chat-navegador-`, `Open-source-Presetation-ia-`, `Duolingo-medicina-`, `Dados-e-Intelig-ncia-artificial-`.

6. **Grid de Habilidades Técnicas Categorizado:**
   - 4 blocos com badges: *IA & Agentes*, *Backend & Desktop*, *Computação Visual & 3D*, *DevOps & Engenharia de Dados*.

7. **Linha do Tempo de Trajetória & Experiência.**

8. **Seção de Prova Social & Depoimentos.**

9. **Contato Direto com 1-Clique para Copiar E-mail:**
   - Botão interativo com notificação animada (*Toast*) ao copiar `marlonferreira1800@gmail.com`.

---

## 💻 Como Visualizar Localmente

Basta dar dois cliques no arquivo:
```
c:\Users\marlo\OneDrive\Desktop\ideias\portfolio-tamal-style\index.html
```
Ou rodar um servidor HTTP local:
```powershell
# No PowerShell dentro da pasta:
cd "c:\Users\marlo\OneDrive\Desktop\ideias\portfolio-tamal-style"
python -m http.server 3000
# Acesse no navegador: http://localhost:3000
```

---

## 🚀 Como Publicar no seu GitHub Pages (marlonferreira1800-hue.github.io)

Para substituir o template antigo pelo novo padrão Tamal Sen no seu site oficial do GitHub (`https://marlonferreira1800-hue.github.io`):

```powershell
# 1. Clone ou acesse seu repositório github.io:
cd "c:\Users\marlo\OneDrive\Desktop\ideias"
gh repo clone marlonferreira1800-hue/marlonferreira1800-hue.github.io repo-github-io

# 2. Copie os novos arquivos:
Copy-Item -Path ".\portfolio-tamal-style\*" -Destination ".\repo-github-io\" -Recurse -Force

# 3. Commit e Push:
cd repo-github-io
git add .
git commit -m "feat: redesign completo do portfolio no padrao tamalsen.dev com projetos do github"
git push origin master
```

Em instantes, o seu site estará no ar mundialmente com a nova identidade!
