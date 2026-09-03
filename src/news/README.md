# News Items

News items can be organized by year, though this isn't a requirement. Older items migrated from the WordPress TEI website may be in folders by year, month, and day, but that reflects the structure they came from, not the way it has to be. Folder organization should focus on findability.

The crucial thing with news items is to set the date in the header, so for example:

```txt
---
title: "This is a news item"
date: 2024-07-22
---
```
Dates can be quoted or not, but they must be in ISO (YYYY-MM-DD) format. If you fail to set the date, the news item won't be linked properly to the news page.

The `permalink` meta data field is optional, and by default a permalink will be 
generated based on the date and title of the news item.
Only the older items migrated from the WordPress TEI website have a 
`permalink` field, to make sure that the established permalinks are consistent.
If you set a `permalink` field, it needs to follow the format 
`/news/YYYY/MM/DD/title-of-the-news-item` otherwise it will be ignored.
