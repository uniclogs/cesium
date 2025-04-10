from os.path import exists, abspath
from json import dumps
from flask import Blueprint, current_app, send_file
from flask_cors import cross_origin

view_tiles = Blueprint("view_tiles", __name__)


@view_tiles.route("/<int:zoom>/<int:x>/<int:y>.png")
#@cross_origin(origins=["http://localhost:5173", "http://localhost:3000"])
@cross_origin(origins='*')
def get_tile(zoom: int, x: int, y: int):
    
    tiles_dir = getattr(current_app, "tiles_dir", "../geo-tiles/tiles")
    tile_path = abspath(f"{tiles_dir}/{zoom}/{x}/{y}.png")
    print(f"[TILE DEBUG] Tile path being served: {tile_path}")

    #tile_path = abspath(f"{data_dir}/tiles/{zoom}/{x}/{y}.png")
    #print(f"[TILE DEBUG] Tile path being served: {tile_path}")



    try:
        #exists(tile_path)
        return send_file(tile_path)
    except FileNotFoundError:
        return {"err": f"No such tile for {x} by {y} at a zoom of {zoom}"}, 404
