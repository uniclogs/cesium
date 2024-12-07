from __future__ import annotations
from flask import Flask
from flask_cors import CORS
from .views import view_czml, view_groundstation, view_passes, view_satellite, view_tiles
from .data import Data


class App(Flask):
    host: str
    port: int
    data_dir: str
    debug: bool

    def __init__(
        self: App,
        host: str,
        port: int,
        data_dir: str,
        data: Data,
        debug: bool,
    ):
        super().__init__(__name__)

        # Setup app parameters
        self.host = host
        self.port = port
        self.data_dir = data_dir
        self.data = data
        self.debug = debug

        # Register app views
        self.register_blueprint(view_czml, url_prefix="/czml")
        self.register_blueprint(view_groundstation, url_prefix="/gs")
        self.register_blueprint(view_passes, url_prefix="/passes")
        self.register_blueprint(view_satellite, url_prefix="/sat")
        self.register_blueprint(view_tiles, url_prefix="/tiles")

    def run(self: App):
        super().run(host=self.host, port=self.port, debug=self.debug)
