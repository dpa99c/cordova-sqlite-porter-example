

/*******************************************************************************

  Comments and new lines in SQL

********************************************************************************/

DROP TABLE IF EXISTS Album;
CREATE TABLE Album ([AlbumId] PRIMARY KEY, [Title]);
INSERT OR REPLACE INTO Album(AlbumId,Title) VALUES ('1','''&\"');
INSERT OR REPLACE INTO Album(AlbumId,Title) VALUES ('2','This has \n new lines \n\r');
INSERT OR REPLACE INTO Album(AlbumId,Title) VALUES ('3','This has \t tabs \t');
INSERT OR REPLACE INTO Album(AlbumId,Title) VALUES ('4','This has ''single quotes'',  \n new lines & "double quotes"\n\r');