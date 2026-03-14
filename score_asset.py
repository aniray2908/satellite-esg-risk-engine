import argparse
from ceri_engine.scoring import score_asset


def main():

    parser = argparse.ArgumentParser(
        description="CERI Environmental Exposure Scoring Engine"
    )

    parser.add_argument("--f1", type=float, required=True,
                        help="Exposure intensity feature")

    parser.add_argument("--f2", type=float, required=True,
                        help="Vegetation suppression feature")

    parser.add_argument("--f3", type=float, required=True,
                        help="Exposure persistence feature")

    args = parser.parse_args()

    features = {
        "F1_exposure_intensity": args.f1,
        "F2_vegetation_suppression": args.f2,
        "F3_persistence_raw": args.f3
    }

    result = score_asset(features)

    print(result)


if __name__ == "__main__":
    main()
