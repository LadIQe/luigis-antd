Postup spustenia:

- `yarn install` (yarn musi byt nainstalovany v systeme)
- `yarn start`
- po zbehnuti v prehliadaci otvorit `http://localhost:3000`

Pod logom sa nachadza tzv Popover, vyzera ako button. Nazov ma "Btn". Po prejdeni mysou sa musi ukazat mensi popup nad nim.
V tomto pripade sa neukaze a dochadza ku konfliktu medzi Luigis Box a antdom (UI). Pre spojazdenenie antd popovera je nutne
vymazat zo subora `index.html` (nachadza sa v public priecinku) z 5. riadku

`<script async src="https://scripts.luigisbox.com/LBX-179141.js"></script>`

Po odstraneni sa aplikacia sama refreshne a popover by uz mal fungovat. V pripade, ze sa aplikacia nerefreshne, staci zastavit proces

- na windowse a linuxe `ctrl + c`
- mac `cmd + c`

a znova spustit appku: `yarn start` a manualne refreshnut stranku
