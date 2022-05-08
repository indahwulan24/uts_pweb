import{_ as f,r as l,b as c,o as i,c as n,a as t,w as k,v as S,t as r,e as u,F as x,d as b,p as q,f as w}from"./index.f701eb64.js";const j={data(){return{cari:"",surah:l([]),judul:l([]),name:[],translates:l([]),audio:""}},watch:{cari(){this.getSurah(),this.getJudul(),this.getTranslate(),this.getAudio()}},mounted(){this.getSurah(),this.getJudul(),this.getTranslate(),this.getAudio()},methods:{getSurah(){c.get("https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number="+this.cari).then(e=>{this.surah=e.data.verses}).catch(e=>{console.log(e)})},getJudul(){c.get("https://api.quran.com/api/v4/chapters/"+this.cari+"?language=id").then(e=>{var o;this.judul=e.data.chapter,this.name=(o=this.judul)==null?void 0:o.translated_name}).catch(e=>{console.log(e)})},getTranslate(){c.get("https://api.quran.com/api/v4/quran/translations/39?chapter_number="+this.cari).then(e=>{this.translates=e.data.translations}).catch(e=>{console.log(e)})},getAudio(){c.get("https://api.quran.com/api/v4/chapter_recitations/7/"+this.cari).then(e=>{this.audio=e.data.audio_file}).catch(e=>{console.log(e)})}}},h=e=>(q("data-v-d1a4ea18"),e=e(),w(),e),A={class:"text-center"},V=h(()=>t("h1",null,"Masukkan Nomor Surah!",-1)),I={key:0},T={class:"mt-5"},y=h(()=>t("br",null,null,-1)),B=h(()=>t("br",null,null,-1)),D={key:0,class:"text-lg-center mt-3"},J=["src"],N={class:"card-body"},F={class:"card-title text-lg-end"},M={class:"card-title text-end"};function C(e,o,E,L,s,U){var d,_,p,m;return i(),n(x,null,[t("div",A,[V,k(t("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>s.cari=a),class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"},null,512),[[S,s.cari]]),s.cari?(i(),n("div",I,[t("div",T,[t("h1",null,r((d=s.judul)==null?void 0:d.name_complex),1),y,t("h1",null,r((_=s.name)==null?void 0:_.name),1),B,t("h2",null,"Diturunkan di : "+r((p=s.judul)==null?void 0:p.revelation_place),1)]),s.audio?(i(),n("p",D,[t("audio",{src:(m=s.audio)==null?void 0:m.audio_url,controls:""},null,8,J)])):u("",!0)])):u("",!0)]),s.cari?(i(!0),n(x,{key:0},b(s.surah,(a,g)=>{var v;return i(),n("div",{key:g,class:"card"},[t("div",N,[t("h5",F,r(a==null?void 0:a.text_uthmani)+r(a==null?void 0:a.verse_key),1),t("p",M,r((v=s.translates[g])==null?void 0:v.text),1)])])}),128)):u("",!0)],64)}var G=f(j,[["render",C],["__scopeId","data-v-d1a4ea18"]]);export{G as default};
