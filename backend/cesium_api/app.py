from __future__ import annotations
from flask import Flask, Blueprint
from flask_cors import CORS
from . import DEFAULT_DATA_DIR
from . import DEFAULT_TILES_DIR
from .views import view_czml, view_groundstation, view_passes, view_satellite, view_tiles
from .data import Data


class App(Flask):
    host: str
    port: int
    data_dir: str
    debug: bool

    def __init__(
        self: App,
        data: Data["DATA"],
        host: str = 'localhost',
        port: int = 9000,
        api_prefix: str = '/',
        data_dir: str = DEFAULT_DATA_DIR,
        tiles_dir: str = DEFAULT_TILES_DIR,
        debug: bool = False,
    ):
        super().__init__(__name__)

        # Setup app parameters
        self.host = host
        self.port = port
        self.data_dir = data_dir
        self.tiles_dir = tiles_dir or DEFAULT_TILES_DIR
        self.data = data
        self.debug = debug

        CORS(self, origins=["http://localhost:3000", "https://cesium-api.uniclogs.org"])

        # Register app views
        self.register_blueprint(view_czml, url_prefix=f"{api_prefix}/czml")
        self.register_blueprint(view_groundstation, url_prefix=f"{api_prefix}/gs")
        self.register_blueprint(view_passes, url_prefix=f"{api_prefix}/passes")
        self.register_blueprint(view_satellite, url_prefix=f"{api_prefix}/sat")
        self.register_blueprint(view_tiles, url_prefix=f"{api_prefix}/tiles")

    def run(self: App):
        super().run(host=self.host, port=self.port, debug=self.debug)
