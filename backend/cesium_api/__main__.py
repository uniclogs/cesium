from argparse import ArgumentParser, Namespace
from .app import App
from .data import Data
from flask_cors import CORS
from . import APP_NAME, APP_DESCRIPTION, APP_VERSION, SATELLITES, GROUND_STATIONS, DEFAULT_DATA_DIR


def parse_args() -> Namespace:
    parser = ArgumentParser(prog=APP_NAME, description=APP_DESCRIPTION)
    parser.add_argument(
        "--version",
        "-v",
        dest="version",
        action="store_true",
        default=False,
        help="Print application version.",
    )
    parser.add_argument(
        "-H",
        "--host",
        dest="host",
        type=str,
        default="localhost",
        help="Host to bind API server to. (default %(default)s)",
    )
    parser.add_argument(
        "-P",
        "--port",
        dest="port",
        type=int,
        default=9000,
        help="Host to bind API server to. (default %(default)s)",
    )
    parser.add_argument(
        "--debug",
        dest="debug",
        action="store_true",
        default=False,
        help="Enable debug mode for the API. (default: %(default)s)",
    )
    parser.add_argument(
        "--data-dir",
        "-d",
        dest="data_dir",
        type=str,
        default=DEFAULT_DATA_DIR,
        help="Data directory with all of the generated globe tiles. (default: %(default)s)",
    )
    return parser.parse_args()


def main():
    args = parse_args()

    if args.version:
        print(f"{APP_NAME} v{APP_VERSION}: {APP_DESCRIPTION}")
        return

    app = App(
        host=args.host,
        port=args.port,
        data_dir=args.data_dir,
        data=Data(SATELLITES, GROUND_STATIONS),
        debug=args.debug,
    )
    CORS(app)
    app.run()


if __name__ == "__main__":
    main()
