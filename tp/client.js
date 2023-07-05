//by Luna

RegisterCommand('tp', () => {

    let teleport = true;
    const ped = PlayerPedId();
    const player = PlayerId();
    const blip = GetFirstBlipInfoId(8);
    let [bx, by, bz] = GetBlipInfoIdCoord(blip);
    SetPedCoordsKeepVehicle(ped, bx, by, bz);

    let [x, y, z] = GetEntityCoords(ped, true)

    if (teleport = true) {

        SetPlayerInvincible(player, true);
    }
    else {

        SetPlayerInvincible(player, false);
    };

    if (x, y, z !== bx, by, bz) {

        teleport = false;
    }
    else {
        teleport = true;
    };
})

//by Luna
