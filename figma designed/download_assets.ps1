$images = @(
    '5e869dff2c3f715d14141583ea4f3154100d1add.png',
    'e5d26388c2ffd1d3a2cf7f6e3bcdaace2739d625.png',
    '51ccd9a0fde48c99f36ff5ff99f3116a35096e90.png',
    '081e9026626eab0e83b3e2587040daa3c0fe3839.png',
    '9e9d0de76358c0cee905246d1375cbd21b288b87.png',
    '73b7684f06055921d5861490b200889d25ea357d.png',
    '22a741faaed90f334375c040f3a64c6fe4fff2bf.png',
    '7f84654afce9a0d76d2f3d7f900f8636f7fed4ec.svg'
)

foreach ($img in $images) {
    $url = "http://localhost:3845/assets/$img"
    $path = "d:\figma designed\src\assets\$img"
    if (!(Test-Path $path)) {
        try {
            Invoke-WebRequest -Uri $url -OutFile $path
            Write-Host "Downloaded: $img"
        } catch {
            Write-Host "Failed: $img - $_"
        }
    } else {
        Write-Host "Exists: $img"
    }
}
