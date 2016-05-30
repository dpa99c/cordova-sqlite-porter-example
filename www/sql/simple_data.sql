INSERT INTO Album(AlbumId,Title) VALUES ('6','Jane (inserted)');
INSERT OR REPLACE INTO Album(AlbumId,Title) VALUES ('1','Claire (replaced)');
UPDATE Album SET Title='Susan (updated)' WHERE AlbumId='2';
DELETE FROM Album WHERE AlbumId='5';
INSERT OR REPLACE INTO `t_Track-Details`(`c_Track-Id`,Name) VALUES ('1','Some name');