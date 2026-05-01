#!/bin/bash

# Utilidad para insertar un nodo/concepto en la BBDD saber.sqlite

tag="$TAGNODO"
tipo="$TIPO"
echo "insert into nodos (tag,ctg) values ('$tag','$tipo');" | sqlite3 saber.sqlite;
