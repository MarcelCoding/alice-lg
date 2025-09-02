{ lib
, buildGoModule
, stdenv
, pnpm
, gitUpdater
, nodejs
, nixosTests
}:

buildGoModule rec {
  pname = "alice-lg";
  version = "6.1.0";

  src = lib.cleanSource ./.;
  vendorHash = "sha256-OkOUgW6BHJKIdY1soMqTXhL6RYy3567iL1/VZasIdvQ=";

  passthru.ui = stdenv.mkDerivation (finalAttrs: {
    pname = "alice-lg-ui";
    src = "${src}/ui";
    inherit version;

    pnpmDeps = pnpm.fetchDeps {
      inherit (finalAttrs) pname version src;
      hash = "sha256-kUOEqC7k9rCcwWDILT113hPVbT/+6ud/u18zQ/N08EI=";
    };

    nativeBuildInputs = [ nodejs pnpm.configHook ];

    buildPhase = ''
      pnpm run build
    '';

    installPhase = ''
      runHook preInstall
      mkdir -p $out
      cp -r ./build/* $out/
      runHook postInstall
    '';
  });

  preBuild = ''
    cp -R ${passthru.ui}/ ui/build/
  '';

  subPackages = [ "cmd/alice-lg" ];
  doCheck = false;

  passthru = {
    tests = nixosTests.alice-lg;
    updateScript = gitUpdater { };
  };

  meta = {
    homepage = "https://github.com/alice-lg/alice-lg";
    description = "Looking-glass for BGP sessions";
    changelog = "https://github.com/alice-lg/alice-lg/blob/main/CHANGELOG.md";
    license = lib.licenses.bsd3;
    maintainers = with lib.maintainers; [ stv0g ];
    mainProgram = "alice-lg";
  };
}
