// lint-html.js
import { HTMLHint } from "htmlhint";
import fs from "fs";

// charger ton fichier HTML
const html = fs.readFileSync("chemin/vers/ton/fichier.html", "utf8");

// règles de linting
const rules = {
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "doctype-first": true,
  "tag-pair": true,
  "spec-char-escape": true,
  "id-unique": true
};

// lancer le linter
const results = HTMLHint.verify(html, rules);

// affichage des erreurs
if (results.length > 0) {
  results.forEach((r) => {
    console.log(
      `Ligne ${r.line}, colonne ${r.col} : ${r.message} (règle : ${r.rule.id})`
    );
  });
} else {
  console.log("✅ Aucun problème détecté !");
}
