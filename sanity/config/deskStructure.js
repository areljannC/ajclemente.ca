import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Home Page').child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem().title('Experience Page').child(S.document().schemaType('experiencePage').documentId('experiencePage')),
      S.listItem().title('Projects Page').child(S.document().schemaType('projectsPage').documentId('projectsPage')),
      S.listItem().title('Blog Page').child(S.document().schemaType('blogPage').documentId('blogPage')),
      S.listItem().title('About Page').child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['homePage', 'experiencePage', 'projectsPage', 'blogPage', 'aboutPage'].includes(item.getId())
      ),
    ])
