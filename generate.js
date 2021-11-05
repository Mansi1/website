const fs = require('fs');
const path = require('path');

const importPath = 'src/assets/img-tech';
const exportPath = 'src/page/main/components'

const files = fs.readdirSync(importPath);

const filesWithMetaData = files.map(file => ({
    name: file.split('-').join(' ').replace('.svg', '').replace('.png', ''),
    importName: file.replace('.svg', '').replace('.png','').split('-').reduce((p, c, i) => {
        if (i === 0) {
            return c;
        }
        return p + c.substr(0, 1).toUpperCase() + c.substr(1)
    }, '')+'Logo',
    file,
}))

const fileLines = filesWithMetaData.map(({name, file, importName}) => `import ${importName} from '${path.relative(path.join(exportPath),path.join(importPath, file))}'`)
fileLines.push('')

fileLines.push('export const techIcons: Array<{src: string; name: string}> = [')
for (const fileWithMetaData of filesWithMetaData) {
    fileLines.push(`  { name: "${fileWithMetaData.name}", src: ${fileWithMetaData.importName} },`)
}
fileLines.push(`];`)

fs.writeFileSync(path.join(exportPath,'imgTechIcons.ts'),fileLines.join('\n'))

