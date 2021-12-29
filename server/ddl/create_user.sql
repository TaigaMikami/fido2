create table user (
  email varchar(32) not null primary key, 
  challenge varchar(32),
  rp varchar(32), 
  user_id varchar(32),
  user_name varchar(32),
  user_display_name varchar(32),
  attenstation varchar(10),
  id varchar(32),
  auth_info_fmt varchar(32),
  auth_info_public_key varchar(32),
  auth_info_cred_id varchar(32),
);
