$images = @(
    '0d89fad924b80d6925da49237454821c60775df8.svg',
    '24e92aa21cc62a8c2fa1c412356504d492001af4.svg',
    '0e236bba65a1d61d53801f8794b174b8b411d7a2.svg'
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
