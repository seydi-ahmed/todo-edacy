const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.tODOList.create({
    data: {
      titre: 'Ma première liste',
      status: 'TO_DO',
      items: {
        create: [
          { libelle: 'Acheter du pain', status: 'NOT_DONE' },
          { libelle: 'Lire un livre', status: 'DONE' }
        ]
      }
    }
  });
}

main()
  .then(() => console.log('🌱 Données insérées'))
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });