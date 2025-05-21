const TelegramBot = require('node-telegram-bot-api');

// Ganti dengan token bot Anda
const BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

console.log('🤖 Bot sedang berjalan untuk mendapatkan Chat ID...');
console.log('📱 Silakan:');
console.log('1. Tambahkan bot ke grup private Anda');
console.log('2. Buat bot sebagai admin (opsional tapi direkomendasikan)');
console.log('3. Kirim pesan apa saja di grup');
console.log('4. Chat ID akan muncul di bawah ini');
console.log('─'.repeat(50));

// Listen untuk semua pesan
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const chatType = msg.chat.type;
    const chatTitle = msg.chat.title || msg.chat.first_name || 'Unknown';
    const fromUser = msg.from.first_name || 'Unknown';
    
    console.log('\n📊 INFORMASI CHAT:');
    console.log(`💬 Chat ID: ${chatId}`);
    console.log(`📝 Chat Type: ${chatType}`);
    console.log(`🏷️ Chat Title: ${chatTitle}`);
    console.log(`👤 From User: ${fromUser}`);
    console.log(`📄 Message: ${msg.text || 'Non-text message'}`);
    console.log('─'.repeat(50));
    
    if (chatType === 'group' || chatType === 'supergroup') {
        console.log('✅ CHAT ID GRUP DITEMUKAN!');
        console.log(`🎯 Gunakan Chat ID ini: ${chatId}`);
        console.log('💡 Copy Chat ID di atas ke file .env Anda');
    } else if (chatType === 'private') {
        console.log('ℹ️ Ini adalah chat private, bukan grup');
    }
});

// Handle error
bot.on('polling_error', (error) => {
    console.error('❌ Polling error:', error.message);
});

console.log('\n⏳ Menunggu pesan dari grup...');
