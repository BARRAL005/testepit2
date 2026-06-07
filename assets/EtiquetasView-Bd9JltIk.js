import{f as l,j as e,aa as H,a1 as G,y as se,ab as U,$ as ae,ac as le,S as oe,ad as re,ae as ie,a0 as ne,af as ce,ag as de}from"./ui-Lh8lZkmh.js";import{E as xe}from"./pdf-ur72CjQZ.js";const k=r=>r.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),x={pequena:{label:"Geladeira 70x30",detail:"7 x 3 cm",className:"w-[420px] h-[180px]",pdf:[70,30]},media:{label:"Prateleira 70x30",detail:"7 x 3 cm",className:"w-[420px] h-[180px]",pdf:[70,30]},grande:{label:"Destaque 70x30",detail:"7 x 3 cm",className:"w-[420px] h-[180px]",pdf:[70,30]},extra:{label:"Promo 70x30",detail:"7 x 3 cm",className:"w-[420px] h-[180px]",pdf:[70,30]}},f={simples:{title:"Simples",subtitle:"Padrão",icon:H},promocao:{title:"Promoção",subtitle:"Destaque",icon:oe},geladeira:{title:"Geladeira",subtitle:"Letra grande",icon:le},a4:{title:"Grande (A4)",subtitle:"Cartaz",icon:ae}};function ge({products:r}){var M;const[i,w]=l.useState("produto"),[j,V]=l.useState(""),[C,S]=l.useState(((M=r[0])==null?void 0:M.id)||""),[L,z]=l.useState(""),[P,$]=l.useState(""),[c,N]=l.useState("CERVEJA GELADA"),[J,A]=l.useState("simples"),[p,E]=l.useState("pequena"),[Q,R]=l.useState(!0),[W,T]=l.useState(!0),[_,D]=l.useState(!1),[m,h]=l.useState(1),[F,B]=l.useState(null),[q,O]=l.useState([]),Z=l.useRef(null),K=l.useMemo(()=>{const t=j.trim().toLowerCase();return t?r.filter(a=>a.name.toLowerCase().includes(t)||a.category.toLowerCase().includes(t)).slice(0,12):r.slice(0,10)},[r,j]),n=r.find(t=>t.id===C)||r[0],u=i==="produto"?(n==null?void 0:n.price)||0:Number(P.replace(",","."))||0,g=i==="produto"?(n==null?void 0:n.name)||"Produto":L.trim()||"PROMOÇÃO DO DIA";i==="produto"&&n!=null&&n.category;const I=t=>{var o;const a=(o=t.target.files)==null?void 0:o[0];if(!a)return;const s=new FileReader;s.onload=()=>B(String(s.result)),s.readAsDataURL(a)},X=()=>{z(""),$(""),N("CERVEJA GELADA"),A("simples"),E("pequena"),R(!0),T(!0),D(!1),h(1),B(null)},v=t=>{const a=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});O(s=>[`${a} • ${t}: ${g} ${k(u)}`,...s].slice(0,8))},Y=(t=!1)=>{const[a,s]=x[p].pdf,o=t?{width:`${a}mm`,height:`${s}mm`,borderRadius:"0",boxShadow:"none"}:void 0;return e.jsxs("div",{className:`${t?"":x[p].className} relative overflow-hidden bg-white shadow-2xl flex flex-col items-center justify-center text-center px-2`,style:o,children:[e.jsxs("div",{className:"absolute inset-0 opacity-90 pointer-events-none",children:[e.jsx("span",{className:"absolute left-[6%] top-[8%] w-2 h-2 rounded-full bg-black"}),e.jsx("span",{className:"absolute right-[9%] top-[13%] w-1.5 h-1.5 rounded-full bg-black"}),e.jsx("span",{className:"absolute left-[13%] bottom-[11%] w-1.5 h-1.5 rounded-full bg-black"}),e.jsx("span",{className:"absolute right-[18%] bottom-[8%] w-2 h-2 rounded-full bg-black"}),e.jsx("span",{className:"absolute left-[48%] top-[36%] w-[36%] h-[3px] rounded-full bg-yellow-400 -rotate-2"})]}),e.jsxs("div",{className:"relative z-10 w-full leading-none",children:[e.jsxs("div",{className:"font-black uppercase tracking-tight text-[17px] sm:text-[18px] graffiti-title flex justify-center gap-1",children:[e.jsx("span",{className:"text-white",children:"PIT"}),e.jsx("span",{className:"text-white",children:"STOP"}),e.jsx("span",{className:"text-white",children:"COHAB"})]}),c&&e.jsx("div",{className:"mt-1 font-black uppercase italic text-[8px] tracking-wide text-black graffiti-small truncate",children:c}),e.jsx("h2",{className:"mt-1 font-black uppercase text-[26px] leading-none text-white graffiti-product truncate",children:g}),e.jsxs("div",{className:"mt-0 flex items-end justify-center gap-2 font-black leading-none",children:[e.jsx("span",{className:"text-[17px] text-white graffiti-price-symbol mb-1",children:"R$"}),e.jsx("span",{className:"text-[42px] text-white graffiti-price",children:u.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})})]})]})]})},ee=()=>{v("Impressão");const[t,a]=x[p].pdf,s=u.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),o=g.toUpperCase(),b=c.toUpperCase(),d=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Etiqueta PitStop Grafite 70x30</title>
          <style>
            @page { size: ${t}mm ${a}mm; margin: 0; }
            * { box-sizing: border-box; }
            html, body {
              width: ${t}mm;
              height: ${a}mm;
              margin: 0;
              padding: 0;
              overflow: hidden;
              background: #fff;
              font-family: Arial Black, Impact, Arial, sans-serif;
            }
            .label-page {
              width: ${t}mm;
              height: ${a}mm;
              page-break-after: always;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              overflow: hidden;
              background: #fff;
              position: relative;
              padding: 1mm 2mm 0.6mm;
            }
            .splatter {
              position: absolute;
              width: 1.2mm;
              height: 1.2mm;
              border-radius: 999px;
              background: #000;
            }
            .s1 { left: 5mm; top: 2.2mm; }
            .s2 { right: 6mm; top: 3mm; }
            .s3 { left: 10mm; bottom: 3mm; }
            .s4 { right: 12mm; bottom: 2.5mm; }
            .yellow-line {
              position:absolute;
              width: 26mm;
              height: 0.8mm;
              background:#ffffff;
              border-radius: 10mm;
              top: 11.6mm;
              left: 31mm;
              transform: rotate(-2deg);
            }
            .content { position: relative; z-index: 2; width: 100%; }
            .brand {
              font-size: 12pt;
              font-weight: 900;
              line-height: 0.9;
              letter-spacing: -0.4pt;
              white-space: nowrap;
              text-shadow: 1.4pt 1.4pt 0 #000, -0.6pt -0.6pt 0 #000, 0.6pt -0.6pt 0 #000, -0.6pt 0.6pt 0 #000;
            }
            .pit { color:#ffffff; }
            .stop { color:#ffffff; }
            .cohab { color:#ffffff; }
            .subtitle {
              font-size: 5.8pt;
              font-weight: 900;
              font-style: italic;
              color: #111;
              letter-spacing: 0.2pt;
              margin-top: 0.8mm;
              white-space: nowrap;
              text-shadow: 0.35pt 0.35pt 0 #fff;
            }
            .name {
              font-size: 18pt;
              font-weight: 900;
              color: #ffffff;
              line-height: 0.9;
              margin-top: 0.6mm;
              text-transform: uppercase;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              text-shadow: 1.5pt 1.5pt 0 #000, -0.7pt -0.7pt 0 #000, 0.7pt -0.7pt 0 #000, -0.7pt 0.7pt 0 #000;
            }
            .price {
              margin-top: -0.4mm;
              display: flex;
              align-items: flex-end;
              justify-content: center;
              gap: 1.4mm;
              font-weight: 900;
              line-height: 0.85;
            }
            .currency {
              font-size: 13pt;
              color: #ffffff;
              padding-bottom: 1.6mm;
              text-shadow: 1.1pt 1.1pt 0 #000;
            }
            .value {
              font-size: 29pt;
              color: #ffffff;
              letter-spacing: -1.2pt;
              text-shadow: 1.6pt 1.6pt 0 #000, -0.7pt -0.7pt 0 #000, 0.7pt -0.7pt 0 #000, -0.7pt 0.7pt 0 #000;
            }
          </style>
        </head>
        <body>
          ${Array.from({length:m}).map(()=>`
            <div class="label-page">
              <span class="splatter s1"></span><span class="splatter s2"></span><span class="splatter s3"></span><span class="splatter s4"></span>
              <span class="yellow-line"></span>
              <div class="content">
                <div class="brand"><span class="pit">PIT</span> <span class="stop">STOP</span> <span class="cohab">COHAB</span></div>
                ${b?`<div class="subtitle">${b}</div>`:""}
                <div class="name">${o}</div>
                <div class="price"><span class="currency">R$</span><span class="value">${s}</span></div>
              </div>
            </div>`).join("")}
          <script>window.onload = () => setTimeout(() => window.print(), 300);<\/script>
        </body>
      </html>`,y=window.open("","_blank");y&&(y.document.write(d),y.document.close())},te=()=>{v("PDF");const[t,a]=x[p].pdf,s=new xe({orientation:"landscape",unit:"mm",format:[t,a]}),o=u.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),b=(d=!1)=>{d||s.addPage([t,a],"landscape"),s.setFillColor(255,255,255),s.rect(0,0,t,a,"F"),s.setFont("helvetica","bold"),s.setFontSize(11),s.setTextColor(0,190,255),s.text("PIT",12,7.8,{align:"center"}),s.setTextColor(255,196,0),s.text("STOP",33,7.8,{align:"center"}),s.setTextColor(150,90,230),s.text("COHAB",56,7.8,{align:"center"}),c&&(s.setFontSize(6.2),s.setTextColor(0,0,0),s.text(c.toUpperCase(),35,11.2,{align:"center",maxWidth:64})),s.setFontSize(17),s.setTextColor(150,210,0),s.text(g.toUpperCase(),35,18.1,{align:"center",maxWidth:66}),s.setFontSize(12),s.setTextColor(120,60,210),s.text("R$",22,26),s.setFontSize(30),s.setTextColor(255,70,160),s.text(o,43,27.2,{align:"center"})};for(let d=0;d<m;d+=1)b(d===0);s.save(`etiqueta-grafite-editavel-${g.toLowerCase().replace(/[^a-z0-9]+/g,"-")||"pitstop"}.pdf`)};return e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(H,{className:"w-7 h-7 text-gold-500"}),e.jsx("h1",{className:"font-display font-black text-3xl text-white tracking-tight",children:"Etiquetas"})]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Etiqueta grafite editável 70x30mm: altere produto, preço e bordão antes de imprimir."})]}),e.jsxs("button",{type:"button",onClick:()=>O([]),className:"px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:border-gold-500/40 transition flex items-center gap-2",children:[e.jsx(G,{className:"w-4 h-4"})," Limpar histórico"]})]}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-[1fr_1.08fr] gap-4",children:[e.jsxs("section",{className:"bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden",children:[e.jsxs("div",{className:"grid grid-cols-2 bg-slate-950/60 border-b border-slate-800",children:[e.jsx("button",{type:"button",onClick:()=>w("produto"),className:`py-4 text-sm font-black ${i==="produto"?"text-slate-950 bg-gold-500":"text-slate-400 hover:text-white"}`,children:"Produto cadastrado"}),e.jsx("button",{type:"button",onClick:()=>w("personalizada"),className:`py-4 text-sm font-black ${i==="personalizada"?"text-slate-950 bg-gold-500":"text-slate-400 hover:text-white"}`,children:"Personalizada"})]}),e.jsxs("div",{className:"p-5 space-y-5",children:[i==="produto"?e.jsxs("div",{className:"space-y-3",children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Buscar produto"}),e.jsxs("div",{className:"relative",children:[e.jsx(se,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"}),e.jsx("input",{value:j,onChange:t=>V(t.target.value),placeholder:"Digite nome ou categoria...",className:"w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white outline-none focus:border-gold-500/60"})]}),e.jsx("div",{className:"bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden max-h-64 overflow-y-auto",children:K.map(t=>e.jsxs("button",{type:"button",onClick:()=>S(t.id),className:`w-full flex items-center justify-between gap-3 px-4 py-3 text-left border-b border-slate-900 last:border-b-0 hover:bg-slate-900/70 ${C===t.id?"bg-gold-500/10":""}`,children:[e.jsxs("div",{children:[e.jsx("strong",{className:"text-white text-sm",children:t.name}),e.jsx("p",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:t.category})]}),e.jsx("span",{className:"text-gold-400 font-black text-sm",children:k(t.price)})]},t.id))})]}):e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Nome / descrição"}),e.jsx("input",{value:L,maxLength:50,onChange:t=>z(t.target.value),placeholder:"Ex: BRAHMA ROMARINHO",className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-gold-500/60"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Preço"}),e.jsx("input",{value:P,onChange:t=>$(t.target.value),placeholder:"2,99",className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-gold-500/60"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Texto pequeno"}),e.jsx("input",{value:c,maxLength:30,onChange:t=>N(t.target.value),placeholder:"Ex: CERVEJA GELADA",className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-gold-500/60"})]})]}),i==="produto"&&e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Texto pequeno"}),e.jsx("input",{value:c,maxLength:30,onChange:t=>N(t.target.value),placeholder:"Ex: CERVEJA GELADA",className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-gold-500/60"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Logo personalizada"}),e.jsxs("label",{className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 hover:border-gold-500/50 cursor-pointer flex items-center justify-between gap-3",children:[e.jsx("span",{children:F?"Logo carregada":"Usar outra logo"}),e.jsx(U,{className:"w-4 h-4 text-gold-500"}),e.jsx("input",{type:"file",accept:"image/*",onChange:I,className:"hidden"})]})]})]}),i==="personalizada"&&e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Logo personalizada"}),e.jsxs("label",{className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 hover:border-gold-500/50 cursor-pointer flex items-center justify-between gap-3",children:[e.jsx("span",{children:F?"Logo carregada":"Usar outra logo"}),e.jsx(U,{className:"w-4 h-4 text-gold-500"}),e.jsx("input",{type:"file",accept:"image/*",onChange:I,className:"hidden"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Modelo da etiqueta"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mt-2",children:Object.keys(f).map(t=>{const a=f[t].icon;return e.jsxs("button",{type:"button",onClick:()=>A(t),className:`p-3 rounded-xl border text-center transition ${J===t?"border-gold-500 bg-gold-500/10 text-gold-300":"border-slate-800 bg-slate-950 text-slate-400 hover:text-white"}`,children:[e.jsx(a,{className:"w-5 h-5 mx-auto mb-2"}),e.jsx("strong",{className:"block text-xs",children:f[t].title}),e.jsx("span",{className:"text-[10px] opacity-70",children:f[t].subtitle})]},t)})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Tamanho"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mt-2",children:Object.keys(x).map(t=>e.jsxs("button",{type:"button",onClick:()=>E(t),className:`p-3 rounded-xl border text-center transition ${p===t?"border-gold-500 bg-gold-500/10 text-gold-300":"border-slate-800 bg-slate-950 text-slate-400 hover:text-white"}`,children:[e.jsx("strong",{className:"block text-xs",children:x[t].label}),e.jsx("span",{className:"text-[10px] opacity-70",children:x[t].detail})]},t))})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[["Exibir logo",Q,R],["Borda dourada",W,T],["Selo promoção",_,D]].map(([t,a,s])=>e.jsxs("label",{className:"flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-bold text-slate-300",children:[String(t),e.jsx("input",{type:"checkbox",checked:!!a,onChange:o=>s(o.target.checked),className:"accent-gold-500 w-4 h-4"})]},String(t)))}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Quantidade"}),e.jsxs("div",{className:"mt-2 flex items-center bg-slate-950 border border-slate-800 rounded-xl overflow-hidden w-full sm:w-56",children:[e.jsx("button",{type:"button",onClick:()=>h(Math.max(1,m-1)),className:"w-12 h-11 text-xl text-white hover:bg-slate-900",children:"-"}),e.jsx("input",{value:m,onChange:t=>h(Math.min(50,Math.max(1,Number(t.target.value)||1))),className:"flex-1 bg-transparent text-center text-white font-black outline-none"}),e.jsx("button",{type:"button",onClick:()=>h(Math.min(50,m+1)),className:"w-12 h-11 text-xl text-white hover:bg-slate-900",children:"+"})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-white font-display font-black text-lg",children:"Pré-visualização"}),e.jsx("p",{className:"text-xs text-slate-500",children:"A aparência final pode variar conforme a impressora."})]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-[10px] font-black uppercase tracking-widest",children:i==="produto"?"Produto":"Personalizada"})]}),e.jsx("div",{ref:Z,className:"min-h-[260px] rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center p-5 overflow-auto",children:Y()}),e.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[e.jsxs("button",{type:"button",onClick:X,className:"py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white font-black text-sm flex items-center justify-center gap-2",children:[e.jsx(G,{className:"w-4 h-4"}),"Limpar"]}),e.jsxs("button",{type:"button",onClick:()=>v("Pré-visualização"),className:"py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2",children:[e.jsx(re,{className:"w-4 h-4"}),"Pré-visualizar"]}),e.jsxs("button",{type:"button",onClick:te,className:"py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white font-black text-sm flex items-center justify-center gap-2",children:[e.jsx(ie,{className:"w-4 h-4"}),"Baixar PDF"]}),e.jsxs("button",{type:"button",onClick:ee,className:"py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2",children:[e.jsx(ne,{className:"w-4 h-4"}),"Imprimir"]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("section",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-white font-display font-black",children:"Produtos recentes"}),e.jsx(ce,{className:"w-5 h-5 text-gold-500"})]}),e.jsx("div",{className:"divide-y divide-slate-800 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden",children:r.slice(0,6).map(t=>e.jsxs("button",{type:"button",onClick:()=>{w("produto"),S(t.id)},className:"w-full flex items-center justify-between px-4 py-3 hover:bg-slate-900/70 text-left",children:[e.jsx("span",{className:"text-sm font-bold text-white",children:t.name}),e.jsx("span",{className:"text-sm font-black text-gold-400",children:k(t.price)})]},t.id))})]}),e.jsxs("section",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-white font-display font-black",children:"Histórico de impressões"}),e.jsx(de,{className:"w-5 h-5 text-gold-500"})]}),e.jsx("div",{className:"space-y-2",children:q.length===0?e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-500",children:"Nenhuma impressão registrada nesta sessão."}):q.map(t=>e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-300",children:t},t))})]})]})]})}export{ge as default};
